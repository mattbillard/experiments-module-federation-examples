const getConfig = require('./node_modules/@module-federation-ts-with-router/shared-tools/src/webpack.config.js');

const webpackConfigMixin = {
  devServer: {
    port: 1002,
  },
  output: {
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

const config = getConfig(webpackConfigMixin, moduleFederationConfig);

module.exports = config;
