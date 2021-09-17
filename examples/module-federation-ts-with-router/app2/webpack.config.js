const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  mode: "development",

  // // NOTE: if you wanted to run this app independently on its own port you could uncomment the following and change the start script back to "webpack-cli serve"
  devServer: {
    port: 3002,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: false,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  devtool: 'source-map',
  entry: "./src/index",
  output: {
    publicPath: "/assets/app2/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./button": "./src/components/button/button",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
