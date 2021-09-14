const path = require('path');

const webpackConfigMixin = {
  devServer: {
    port: 1100,
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/definitions'),
    publicPath: '/assets/definitions/',
  },
};

const moduleFederationConfig = {};

module.exports = {
  moduleFederationConfig,
  webpackConfigMixin,
};
