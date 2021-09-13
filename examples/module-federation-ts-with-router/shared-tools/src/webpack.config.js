const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = () => {
  return {
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
      // new ModuleFederationPlugin(
      //   moduleFederationConfig
      // ),
      // new HtmlWebpackPlugin({
      //   template: "./public/index.html",
      // }),
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
  };
};
