const path = require("path");
const getConfig = require('./node_modules/@module-federation-ts-with-router/shared-tools/src/webpack.config.js');

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
    publicPath: '/assets/site/',
  },
};

const moduleFederationConfig = {
  name: "site",
  remotes: {
    app1: "app1@/assets/app1/remoteEntry.js",
    app2: "app2@/assets/app2/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};

const config = getConfig(webpackConfigMixin, moduleFederationConfig);

module.exports = config;