#!/usr/bin/env node

/**
 * CODE MODIFIED FROM
 * Creating node bin scripts:
 * - https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e
 * - https://github.com/yargs/yargs
 * 
 * Starting webpack dev server from node:
 * - https://github.com/webpack/webpack-dev-server/tree/master/examples/api/simple
 */

/**
 * TODO: Could probably improve this bin script a lot with a help menu, etc
 * https://github.com/sindresorhus/meow
 */

const args = process.argv;
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(args)).argv

const command = argv._[0];
const mode = argv.mode || 'development';

const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');

// Paths
const cwd = process.cwd();
const appDefinitionsPath = path.join(cwd, 'webpack.config');
const webpackConfigPath = path.join(__dirname, 'webpack.config.base');

// Get configs
const webpackConfigs = require(appDefinitionsPath);
const getWebpackConfig = require(webpackConfigPath);
const webpackConfig = getWebpackConfig(cwd, mode, webpackConfigs);
const compiler = Webpack(webpackConfig);

switch(command) {
  case 'build': {
    // Run WebpackDev build
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        console.error(err, stats.compilation.errors);
      }
    });
    break;
  }

  case 'serve': {
    // Start WebpackDevServer
    const server = new WebpackDevServer(webpackConfig.devServer, compiler);

    server.startCallback(() => {
      const port = webpackConfig.devServer.port || 8080;
      const protocol = webpackConfig.devServer.secure ? 'https' : 'http';
      const pathname = webpackConfig.output.publicPath;
      
      console.log(`Starting server on ${protocol}://localhost:${port}${pathname}`);
    });
    break;
  }

  default: 
    console.error(`Unrecognized mattfinpack command: ${command}`);
}
  

