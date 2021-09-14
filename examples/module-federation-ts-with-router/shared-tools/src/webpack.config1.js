const _ = require('lodash');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = (cwd) => {
  const defaultConfig = {
    devServer: {
      port: 1101,
      hot: false,
      liveReload: false,
      static: {
        directory: path.join(cwd, "dist"),
      },
    },
    entry: path.resolve(cwd, 'src/index.js'),
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
  };

  return defaultConfig;
};
  
