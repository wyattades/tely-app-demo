const loaderUtils = require('@blitzjs/rpc/dist/chunks/loader-utils.cjs');
const pathLib = require('path');
const babelTemplate = require('@babel/template').default;

// Translated from webpack loader to babel plugin.
// original: https://github.com/blitz-js/blitz/blob/10574b7359522c4998397a74218e071d25ebad58/packages/blitz-rpc/src/loader-client.ts#L37

function transformBlitzRpcResolverClient(id, root) {
  loaderUtils.assertPosixPath(id);
  loaderUtils.assertPosixPath(root);
  const resolverFilePath = '/' + pathLib.posix.relative(root, id);
  loaderUtils.assertPosixPath(resolverFilePath);
  const routePath =
    loaderUtils.convertPageFilePathToRoutePath(resolverFilePath);
  const resolverName =
    loaderUtils.convertFilePathToResolverName(resolverFilePath);
  const resolverType =
    loaderUtils.convertFilePathToResolverType(resolverFilePath);
  const code = `
    // @ts-nocheck
    import { __internal_buildRpcClient } from "@blitzjs/rpc";
    export default __internal_buildRpcClient({
      resolverName: "${resolverName}",
      resolverType: "${resolverType}",
      routePath: "${routePath}",
    });
  `;
  return code;
}

/**
 * @param {babel} babel
 * @returns {{ visitor: import('@babel/traverse').Visitor }}
 */
module.exports = function blitzBabelPlugin(_babel) {
  return {
    visitor: {
      Program: {
        enter(path, state) {
          const { filename, cwd } = state;

          if (filename.includes('node_modules')) return;
          if (!/\/(queries|mutations)\//.test(filename)) return;

          const code = transformBlitzRpcResolverClient(filename, cwd);
          const ast = babelTemplate.ast(code);

          /** @type {babel.NodePath<babel.types.Node>[]} */
          const body = path.get('body');

          // must `remove()` previous nodes
          while (body.length > 0) body.pop().remove();

          path.node.body.push(...ast);
        },
      },
    },
  };
};
