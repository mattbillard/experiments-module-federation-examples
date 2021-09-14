const path = require('path');

const webpackConfigMixin = {
  devServer: {
    port: 1102,
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/app2'),
    publicPath: '/assets/app2/',
  },
};

const moduleFederationConfig = {
  name: "app2",
  filename: "remoteEntry.js",
  exposes: {
    "./button": "./src/components/button/button",
  },
  shared: ["react", "react-dom"],
};

module.exports = {
  moduleFederationConfig,
  webpackConfigMixin,
};
