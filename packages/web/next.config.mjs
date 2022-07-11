import _ from 'lodash';
import { withNativebase } from '@native-base/next-adapter';
import { withBlitz } from '@blitzjs/next';

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,

  /** @param {import('webpack').Configuration} config */
  webpack: (config, _ctx) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // 'react-native$': 'react-native-web',
      '@expo/vector-icons': 'react-native-vector-icons',
    };

    const extra = ['.web.js', '.web.ts', '.web.tsx'];
    config.resolve.extensions = [
      ...extra,
      ..._.without(config.resolve.extensions, ...extra),
    ];

    return config;
  },
};

// https://github.com/GeekyAnts/native-base-next-adapter/blob/master/src/withNativebase.ts
// - transforms `react-native` imports to `react-native-web`
// - adds `.web.js` to `resolve.extensions` (for some reason we still need to do it ourselves though
// - transpiles react-native modules with https://github.com/martpie/next-transpile-modules
export default withNativebase({
  dependencies: [
    '@expo/next-adapter',
    'react-native-vector-icons',
    'react-native-vector-icons-for-web',
    'solito',
    'app',
  ],
  nextConfig: withBlitz(nextConfig),
});
