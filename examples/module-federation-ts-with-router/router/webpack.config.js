const path = require("path");

module.exports = (env = {}) => {
  return {
    mode: "development",
    devServer: {
      port: 3000,
      host: '0.0.0.0',
      hot: false,
      historyApiFallback: {
        index: '/app1/index.html'
      },
      proxy: [
        {
          changeOrigin: true,
          context: ['/app1'],
          cookieDomainRewrite: 'localhost',
          secure: false,
          target: 'http://localhost:3001',
          ws: true,
        },
        // {
        //   changeOrigin: true,
        //   context: ['/app2'],
        //   cookieDomainRewrite: 'localhost',
        //   secure: false,
        //   target: 'http://localhost:3002',
        //   ws: true,
        // },
      ],
      static: {
        directory: path.join(__dirname, "dist"),
      },
    },
  };
};
