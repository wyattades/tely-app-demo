module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      require.resolve('./blitzBabelPlugin'),
      'react-native-reanimated/plugin',

      // substitute `process.env.ENV_VAR`
      // 'transform-inline-environment-variables',

      // `metro-react-native-babel-preset` (which `babel-preset-expo` extends from) does not
      // use `babel-preset-env`, so we have to add these manually...
      '@babel/plugin-proposal-logical-assignment-operators',
      '@babel/plugin-proposal-nullish-coalescing-operator',
    ],
  };
};
