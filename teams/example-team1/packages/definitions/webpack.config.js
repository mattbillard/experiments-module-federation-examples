const path = require('path');

const webpackConfigMixin = {
  devServer: {
    port: 1100,
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/example-team1__definitions'),
    publicPath: '/assets/example-team1__definitions/',
  },
};

const moduleFederationPluginConfig = {};

module.exports = {
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
