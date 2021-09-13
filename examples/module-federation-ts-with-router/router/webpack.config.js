const path = require("path");

module.exports = (env = {}) => {
  return {
    mode: "development",
    devServer: {
      port: 3000,
      host: '0.0.0.0',
      hot: false,
      // historyApiFallback: {
      //   index: '/assets/app1/index.html'  // Requires an actual file so you need to run build on app1
      //   // index: 'http://localhost:3000/assets/app1/index.html'  // Did NOT work
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
        {
          changeOrigin: true,
          context: ['/site/'],
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
