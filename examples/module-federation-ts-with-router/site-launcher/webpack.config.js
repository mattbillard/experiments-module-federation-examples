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
      // contentBase: path.join(__dirname, 'public'),
      host: '0.0.0.0',
      hot: false,
      liveReload: false,
      port: 2000,


      // historyApiFallback: {
      //   rewrites: [
      //     // { from: '/public/test.json', to: '/test.json' },
      //     // { from: 'public/test.json', to: 'test.json' },
      //     { from: /^\/public/, to: 'test.json' },
      //     // { from: /^\/subpage/, to: '/views/subpage.html' },
      //     // { from: /./, to: '/views/404.html' },
      //   ],
      // },

      // historyApiFallback: {
      //   rewrites: [
      //       { from: /foo\/.*/, to: 'public/test.json' },
      //   ]
      // },

      proxy: [
        ...proxy,
        // {
        //   context: ['/public'],
        //   pathRewrite: { '/public/test.json' : '/test.json' },
        //   target: '/',
        // },

        // {
        //   context: ['/public'],
        // },
        {
          changeOrigin: true,
          // context: ['/'],
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
