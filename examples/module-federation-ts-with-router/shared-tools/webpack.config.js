const path = require('path');

const webpackConfigMixin = {
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
const moduleFederationPluginConfig = undefined;

module.exports = {
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
