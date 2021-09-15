const path = require("path");

const proxiesHashMap = {
  '/assets/core-team__site/':             'http://localhost:1000',
  '/site':                                'http://localhost:1000',

  '/assets/example-team1__definitions/':  'http://localhost:1100',
  '/assets/example-team1__app1/':         'http://localhost:1101',
  '/assets/example-team1__app2/':         'http://localhost:1102',

  // Anything not local will be proxied from dev-mock
  // '/':                                   'http://localhost:3000',
  '/':                                    'http://dev.localhost:3000',
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

const webpackConfigMixin = {
  devServer: {
    host: '0.0.0.0',
    hot: false,
    liveReload: false,
    port: 2000,
    proxy,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  mode: "development",
};

const moduleFederationPluginConfig = {};

module.exports = {
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
