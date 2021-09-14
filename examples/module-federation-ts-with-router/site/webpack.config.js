const path = require('path');

const webpackConfigMixin = {
  devServer: {
    historyApiFallback: {
      index: '/assets/site/index.html'  // TODO. I think site is the only one that should have a fallback 
    },
    port: 1000,
    // // TODO: probably comment out
    // proxy: [
    //   {
    //     changeOrigin: true,
    //     context: ['/assets/app1'],
    //     cookieDomainRewrite: 'localhost',
    //     secure: false,
    //     target: 'http://localhost:1001',
    //     ws: true,
    //   },
    //   {
    //     changeOrigin: true,
    //     context: ['/assets/app2'],
    //     cookieDomainRewrite: 'localhost',
    //     secure: false,
    //     target: 'http://localhost:1002',
    //     ws: true,
    //   },
    // ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/site'),
    publicPath: '/assets/site/',
  },
};

const moduleFederationPluginConfig = {
  name: "site",
  // remotes: {
  //   app1: "app1@/assets/app1/remoteEntry.js",
  //   app2: "app2@/assets/app2/remoteEntry.js",
  // },
  shared: ["react", "react-dom"],
};

module.exports = {
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
