const path = require('path');

const webpackConfigMixin = {
  devServer: {
    port: 1101,
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/app1'),
    publicPath: '/assets/app1/',
  },
};

const moduleFederationPluginConfig = {
  name: "app1",
  filename: "remoteEntry.js",
  exposes: {
    "./app": "./src/components/app/app",
    "./button": "./src/components/button/button",
  },
  shared: ["react", "react-dom"],
};

module.exports = {
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
