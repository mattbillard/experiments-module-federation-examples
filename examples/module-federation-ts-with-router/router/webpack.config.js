const path = require("path");

module.exports = (env = {}) => {
  return {
    mode: "development",
    devServer: {
      port: 2000,
      host: '0.0.0.0',
      hot: false,
      // historyApiFallback: {
      //   index: '/assets/site/index.html'  // Requires an actual file so you need to run build on app1
      // },
      liveReload: false,
      proxy: [
        {
          changeOrigin: true,
          context: ['/assets/site', '/site'],
          cookieDomainRewrite: 'localhost',
          secure: false,
          target: 'http://localhost:1000',
          ws: true,
        },

        {
          changeOrigin: true,
          context: ['/assets/app1'],
          cookieDomainRewrite: 'localhost',
          secure: false,
          target: 'http://localhost:1001',
          ws: true,
        },

        {
          changeOrigin: true,
          context: ['/assets/app2'],
          cookieDomainRewrite: 'localhost',
          secure: false,
          target: 'http://localhost:1002',
          ws: true,
        },

        {
          changeOrigin: true,
          context: ['/'],
          cookieDomainRewrite: 'localhost',
          secure: false,
          target: 'http://localhost:3000',
          ws: true,
        },
      ],
      static: {
        directory: path.join(__dirname, "dist"),
      },
    },
  };
};
