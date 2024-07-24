module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'transform-inline-environment-variables',
      {
        include: ['NODE_ENV'],
      },
    ],
  ],
};
