module.exports = function (api) {
  api.cache(true);
  return {
    presets: [],
    plugins: [
      'react-native-reanimated/plugin'
    ]
  };
};
