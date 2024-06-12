const { withExpo } = require('@expo/next-adapter')
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'ui',
    'react-native-reanimated',
    '@expo/html-elements',
    'react-native-gesture-handler',
  ],
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...(config.resolve.alias || {}),
  //     // Transform all direct `react-native` imports to `react-native-web`
  //     "react-native$": "react-native-web",
  //   };
  //   config.resolve.extensions = [
  //     ".web.js",
  //     ".web.jsx",
  //     ".web.ts",
  //     ".web.tsx",
  //     ...config.resolve.extensions,
  //   ];
  //   return config;
  // },
};

module.exports = withExpo(nextConfig)

