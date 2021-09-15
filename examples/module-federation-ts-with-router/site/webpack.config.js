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
  // NOTE: not necessary if you have ModuleFederationPlugin
  // resolve: {
  //   alias: {
  //     // IMPORTANT: this provides React to the component
  //     'react': path.resolve(__dirname, './node_modules/react'),
  //   }
  // },
};

const moduleFederationPluginConfig = {
  name: "site",
  remotes: {
    // Remotes loaded via DynamicModuleFederationLoader
  },
  shared: ["react", "react-dom"],
};

module.exports = {
  isApp: true,
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
