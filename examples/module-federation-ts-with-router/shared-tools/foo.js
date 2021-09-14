#!/usr/bin/env node

// CODE MODIFIED FROM: https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e

const fs = require('fs');
const path = require("path");

// TODO: figure out if this is worth it

// const [,, ...args] = process.argv;
const [...args] = process.argv;



// const pathToConfig = path.join(process.cwd(), 'webpack.config.js');
// const config = fs.readFileSync(pathToConfig);
// const config = JSON.stringify( require(pathToConfig), null, 2);

const cwd = process.cwd();

console.log(`


FOO
  args: 
  ${args.join('\n  ')}

  __dirname:     ${__dirname}
  __filename:    ${__filename}
  process.cwd(): ${cwd}

  
  
  `);
// pathToConfig: ${pathToConfig}  
// config: ${config}







// CODE MODIFIED FROM: https://github.com/webpack/webpack-dev-server/tree/master/examples/api/simple

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server/lib/Server");

// const pathToConfig = path.join(__dirname, "webpack.config");
// const webpackConfig = require(pathToConfig);
// const pathToConfig = path.join(cwd, "webpack.config");
// const getWebpackConfig = require(pathToConfig);
// const webpackConfig = getWebpackConfig(cwd);

const pathToConfig = path.join(__dirname, "src/webpack.config");
const getWebpackConfig = require(pathToConfig);
const webpackConfig = getWebpackConfig(cwd);

console.log(`

  pathToConfig: ${pathToConfig}
  typeof getWebpackConfig: ${getWebpackConfig}
  webpackConfig: ${JSON.stringify(webpackConfig, null, 2)}
  
`)
  
const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(webpackConfig.devServer, compiler);

server.startCallback(() => {
  console.log("Starting server on http://localhost:8080");
});