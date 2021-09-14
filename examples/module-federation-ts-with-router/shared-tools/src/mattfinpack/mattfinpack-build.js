#!/usr/bin/env node

/**
 * CODE MODIFIED FROM
 * Creating node bin scripts:
 * - https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e
 * 
 * Starting webpack dev server from node:
 * - https://github.com/webpack/webpack-dev-server/tree/master/examples/api/simple
 */

// const args = process.argv;
const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');

// Paths
const cwd = process.cwd();
const appDefinitionsPath = path.join(cwd, 'webpack.config');
const webpackConfigPath = path.join(__dirname, 'webpack.config');

// Get configs
const { moduleFederationPluginConfig, webpackConfigMixin } = require(appDefinitionsPath);
const getWebpackConfig = require(webpackConfigPath);
const webpackConfig = getWebpackConfig(cwd, webpackConfigMixin, moduleFederationPluginConfig);
  
// Run WebpackDev
const compiler = Webpack(webpackConfig);
compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err, stats);
  }
});
