
const proxiesHashMap = {
  '/assets/core-team__site/':             'http://localhost:1002',
  '/site':                                'http://localhost:1002',

  // Anything not local will be proxied from dev-mock
  // '/':                                   'http://localhost:3000',
  '/':                                    'http://dev.localhost:3000',
};

const webpackConfigMixin = {
  devServer: {
    port: 1000,
  },
};

module.exports = {
  proxiesHashMap,
  webpackConfigMixin,
};