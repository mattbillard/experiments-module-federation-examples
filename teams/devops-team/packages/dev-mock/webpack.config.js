const path = require('path');

module.exports = (env = {}) => {
  return {
    mode: 'development',
    devServer: {
      port: 2000,
      host: '0.0.0.0',
      hot: false,
      historyApiFallback: {
        index: '/assets/core-team__site/index.html',
      },
      liveReload: false,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
    },
  };
};
