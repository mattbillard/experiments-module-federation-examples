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
  resolve: {
    alias: {
      // IMPORTANT: this provides React to the component
      'react': path.resolve(__dirname, './node_modules/react'),
    }
  },
};

const moduleFederationPluginConfig = {
  name: "site",
  // remotes: {
  //   app1: "app1@/assets/app1/remoteEntry.js",
  //   app2: "app2@/assets/app2/remoteEntry.js",
  // },
  // shared: ["react", "react-dom"],

  shared: {
    react: { singleton: true, eager: true, requiredVersion: '16.13.0' },
    "react-dom": { singleton: true, eager: true, requiredVersion: '16.13.0' }
  },
};

module.exports = {
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
