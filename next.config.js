const withTranspileModules = require('next-transpile-modules')([
  'react-native-tailwindcss'
]);

const withOffline = require('next-offline');

module.exports = withOffline(withTranspileModules({
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
}));
