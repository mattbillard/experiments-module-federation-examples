const path = require("path");

/**
 * INSTRUCTIONS 
 * To run webpack devServer on dev.localhost, you need to do run the following 
 *   sudo nano /etc/hosts
 * And add the following
 *   127.0.0.1       dev.localhost
 */

module.exports = (env = {}) => {
  return {
    mode: "development",
    devServer: {
      port: 3000,
      // host: '0.0.0.0',
      host: 'dev.localhost', // TODO: https://github.com/chimurai/http-proxy-middleware#example
      hot: false,
      historyApiFallback: {
        index: '/assets/core-team__site/index.html',
      },
      liveReload: false,
      static: {
        directory: path.join(__dirname, "dist"),
      },
    },
  };
};