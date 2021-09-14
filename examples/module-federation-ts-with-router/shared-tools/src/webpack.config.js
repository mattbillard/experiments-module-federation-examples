const _ = require('lodash');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = (configMixin, moduleFederationConfig) => {
  const defaultConfig = {
    devServer: {
      // devMiddleware: {
      //   writeToDisk: true,
      // },
      // port,
      hot: false,
      liveReload: false,
      static: {
        directory: path.join(__dirname, "dist"),
      },
    },
    devtool: "source-map",
    entry: "./src/index",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    // output: {
    //   publicPath,
    // },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "public", to: "" },
        ],
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new ModuleFederationPlugin(
        moduleFederationConfig
      ),
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
  };

  return _.merge({}, defaultConfig, configMixin);
};
