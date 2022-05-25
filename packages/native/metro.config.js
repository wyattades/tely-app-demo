// Docs: https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('metro-config');
const { resolve: metroResolve } = require('metro-resolver');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

const config = getDefaultConfig(__dirname);

config.watchFolders = [workspaceRoot];

config.resolver.nodeModulesPath = [
  // path.resolve(projectRoot, 'resolvers'),
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

const aliases = {
  'next/router': path.resolve(projectRoot, 'resolvers/next/router.mjs'),
};

config.resolver.resolveRequest = (context, moduleName, platform) => {
  for (const fromAlias in aliases) {
    if (moduleName.startsWith(fromAlias)) {
      return {
        filePath: aliases[fromAlias],
        type: 'sourceFile',
      };
    }
  }

  // Fallback to the standard Metro resolver.
  return metroResolve(
    {
      ...context,
      resolveRequest: undefined,
    },
    moduleName,
    platform,
  );
};

// this is required to import `@blitzjs/rpc`, which resolves to `@blitzjs/rpc/dist/index-browser.mjs`
config.resolver.sourceExts.push('mjs');

config.transformer = {
  ...config.transformer,
  // babelTransformerPath: require.resolve('./customMetroTransformer.js'),
  minifierPath: require.resolve('metro-minify-esbuild'),
  minifierConfig: {},
};

module.exports = config;
