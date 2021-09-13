#!/usr/bin/env node

// TODO: figure out if this is worth it

// const [,, ...args] = process.argv;
const [...args] = process.argv;

console.log(`\n\n\nFOO \n  ${args.join('\n  ')}\n\n\n`);