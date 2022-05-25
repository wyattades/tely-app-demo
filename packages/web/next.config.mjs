import { withNativebase } from '@native-base/next-adapter';
import { withBlitz } from '@blitzjs/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, _ctx) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      '@expo/vector-icons': 'react-native-vector-icons',
    };

    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];

    return config;
  },
};

export default withNativebase({
  // List of dependencies which are transpiled using https://github.com/martpie/next-transpile-modules
  dependencies: [
    '@expo/next-adapter',
    'react-native-vector-icons',
    'react-native-vector-icons-for-web',
    'solito',
    'app',
  ],
  nextConfig: withBlitz(nextConfig),
});
