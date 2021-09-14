const path = require('path');
const getConfig = require('./node_modules/@module-federation-ts-with-router/shared-tools/src/webpack.config.js');

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

const config = getConfig(webpackConfigMixin, moduleFederationConfig);

module.exports = config;
