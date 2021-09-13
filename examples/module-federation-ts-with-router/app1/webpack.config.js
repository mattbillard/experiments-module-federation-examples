const path = require('path');
const getConfig = require('./node_modules/@module-federation-ts-with-router/shared-tools/src/webpack.config.js');

const webpackConfigMixin = {
  devServer: {
    port: 1001,
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/app1'),
    publicPath: '/assets/app1/',
  },
};

const moduleFederationConfig = {
  name: "app1",
  filename: "remoteEntry.js",
  exposes: {
    "./button": "./src/components/button/button",
  },
  shared: ["react", "react-dom"],
};

const config = getConfig(webpackConfigMixin, moduleFederationConfig);

module.exports = config;
