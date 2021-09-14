const path = require('path');

module.exports = {
  devServer: {
    hot: false,
    liveReload: false,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  entry: "./src/index",
  mode: "development",
}