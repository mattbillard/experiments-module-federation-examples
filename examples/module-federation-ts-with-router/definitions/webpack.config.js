const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (env = {}) => {
  return {
    entry: "./src/index",
    mode: "development",
    output: {
      path: path.resolve(__dirname, 'dist/assets/definitions'),
      publicPath: '/assets/definitions',
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "public", to: "" },
        ],
      }),
    ],
    devServer: {
      hot: false,
      liveReload: false,
      port: 1100,
      static: {
        directory: path.join(__dirname, "public"),
      },
    },
  };
};
