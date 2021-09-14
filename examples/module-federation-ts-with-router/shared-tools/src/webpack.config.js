const _ = require('lodash');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

// module.exports = (configMixin, moduleFederationConfig) => {
module.exports = (cwd) => {
  const defaultConfig = {
    devServer: {
      // devMiddleware: {
      //   writeToDisk: true,
      // },
      // port,

      port: 1101,

      hot: false,
      liveReload: false,
      static: {
        directory: path.join(cwd, "dist"),
      },
    },
    // devtool: "source-map",
    entry: path.resolve(cwd, 'src/index'),
    mode: "development",
    // module: {
    //   rules: [
    //     {
    //       test: /\.css$/,
    //       use: ["style-loader", "css-loader"],
    //     },
    //     {
    //       test: /\.tsx?$/,
    //       loader: "ts-loader",
    //       exclude: /node_modules/,
    //     },
    //   ],
    // },
    // // output: {
    // //   publicPath,
    // // },

    // output: {
    //   path: path.resolve(cwd, 'dist/assets/app1'),
    //   publicPath: '/assets/app1/',
    // },
  
    // plugins: [
    //   new CopyPlugin({
    //     patterns: [
    //       { from: "public", to: "" },
    //     ],
    //   }),
    //   new HtmlWebpackPlugin({
    //     template: "./src/index.html",
    //   }),
    //   // new ModuleFederationPlugin(
    //   //   moduleFederationConfig
    //   // ),
    //   new ModuleFederationPlugin({
    //     name: "app1",
    //     filename: "remoteEntry.js",
    //     exposes: {
    //       "./button": "./src/components/button/button",
    //     },
    //     shared: ["react", "react-dom"],
    //   }),
    // ],
    // resolve: {
    //   extensions: [".ts", ".tsx", ".js"],
    // },
  };

  // return _.merge({}, defaultConfig, configMixin);
  // return _.merge({}, defaultConfig);
  return defaultConfig;
};
