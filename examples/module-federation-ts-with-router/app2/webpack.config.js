const _ = require('lodash');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const getConfig = require('./node_modules/@module-federation-ts-with-router/shared-tools/src/webpack.config.js');

const port = 1002;
const publicPath = '/assets/app2/';
const moduleFederationConfig = {
  name: "app2",
  filename: "remoteEntry.js",
  exposes: {
    "./button": "./src/components/button/button",
  },
  shared: ["react", "react-dom"],
};

const config = _.merge({}, getConfig(), {
  devServer: {
    port,
  },
  output: {
    publicPath,
  },
  plugins: [
    new ModuleFederationPlugin(
      moduleFederationConfig
    ),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});

// console.log(JSON.stringify(config, null, 2));

module.exports = config;
