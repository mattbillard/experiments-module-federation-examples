const path = require("path");

const proxiesHashMap = {
  '/assets/site': 'http://localhost:1000',
  '/site':        'http://localhost:1000',

  // '/assets/app1': 'http://localhost:1001',
  // '/assets/app2': 'http://localhost:1002',

  // Anything not local will be proxied from dev-mock
  // '/':            'http://localhost:3000',
  // '/':            'http://dev.localhost:3000',
};

const proxy = Object.entries(proxiesHashMap).map(([key, value]) => {
  return {
    changeOrigin: true,
    context: [key],
    cookieDomainRewrite: 'localhost',
    secure: false,
    target: value,
    ws: true,
  }
});

module.exports = (env = {}) => {
  return {
    mode: "development",
    devServer: {
      host: '0.0.0.0',
      hot: false,
      liveReload: false,
      port: 2000,
      proxy: [
        ...proxy,
        // Anything not local will be proxied from dev-mock
        {
          changeOrigin: true,
          context: (pathname, req) => !pathname.match('/public') && pathname.match('/'), // Proxy dev but not public
          cookieDomainRewrite: 'localhost',
          secure: false,
          target: 'http://dev.localhost:3000',
          ws: true,
        }
      ],
      static: {
        directory: path.join(__dirname, "public"),
      },
    },
  };
};
