/**
 * NOTE: 
 * Enable each team to work on their code but run the entire site
 * 
 * Proxy... 
 * - this team's localhosts from a single port
 * - other teams' localhosts (optional if you want to make changes in more than one repo at once)
 * - anything not from localhost will be served from dev-mock
 */

// prettier-ignore
const proxiesHashMap = {
  '/assets/example-team1__app1/':         'http://localhost:1101',
  '/assets/example-team1__app2/':         'http://localhost:1102',
  '/assets/example-team1__definitions/':  'http://localhost:1103',
  
  // // NOTE: this team can run other teams' code as well to simultaneously make changes in more than one repo
  // '/assets/core-team__site/':             'http://localhost:1002',
  // '/site-url':                            'http://localhost:1002',

  '/':                                    'http://localhost:2000',  // dev-mock
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
