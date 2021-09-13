const path = require("path");

module.exports = (env = {}) => {
  return {
    mode: "development",
    devServer: {
      port: 3000,
      host: '0.0.0.0',
      hot: false,
      // historyApiFallback: {
      //   index: '/assets/site/index.html'  // Requires an actual file so you need to run build on app1
      // },
      proxy: [
        {
          changeOrigin: true,
          context: ['/assets/app1'],
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

        // {
        //   changeOrigin: true,
        //   context: ['/assets/site'],
        //   cookieDomainRewrite: 'localhost',
        //   secure: false,
        //   target: 'http://localhost:3003',
        //   ws: true,
        // },

        {
          changeOrigin: true,
          context: ['/site/'],
          cookieDomainRewrite: 'localhost',
          secure: false,
          target: 'http://localhost:3003',
          ws: true,
        },

        // {
        //   changeOrigin: true,
        //   context: ['/'],
        //   cookieDomainRewrite: 'localhost',
        //   secure: false,
        //   target: 'http://localhost:3003',   // TODO: proxy to dev
        //   ws: true,
        // },
      ],
      static: {
        directory: path.join(__dirname, "dist"),
      },
    },
  };
};
