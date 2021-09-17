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
  '/assets/core-team__site/': 'http://localhost:1002',
  '/site-url':                'http://localhost:1002',
  '/':                        'http://localhost:2000', // dev-mock
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
