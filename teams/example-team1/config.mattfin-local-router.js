
const proxiesHashMap = {
  // '/assets/core-team__site/':             'http://localhost:1002',
  // '/site':                                'http://localhost:1002',

  '/assets/example-team1__app1/':         'http://localhost:1101',
  '/assets/example-team1__app2/':         'http://localhost:1102',
  '/assets/example-team1__definitions/':  'http://localhost:1103',

  // Anything not local will be proxied from dev-mock
  // '/':                                   'http://localhost:3000',
  '/':                                    'http://dev.localhost:3000',
};

const webpackConfigMixin = {
  devServer: {
    port: 1100,
  },
};

module.exports = {
  proxiesHashMap,
  webpackConfigMixin,
};