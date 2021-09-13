#!/usr/bin/env node

// CODE MODIFIED FROM: https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e

const fs = require('fs');
const path = require("path");

// TODO: figure out if this is worth it

// const [,, ...args] = process.argv;
const [...args] = process.argv;



const pathToConfig = path.join(process.cwd(), 'webpack.config.js');
// const config = fs.readFileSync(pathToConfig);
const config = JSON.stringify( require(pathToConfig), null, 2);


console.log(`


FOO
  args: 
  ${args.join('\n  ')}

  __dirname:     ${__dirname}
  __filename:    ${__filename}
  process.cwd(): ${process.cwd()}

  pathToConfig: ${pathToConfig}
  
  config: ${config}


`);