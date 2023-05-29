#!/usr/bin/env node

const { program } = require('commander');

program
  .command('hello <name>')
  .description('Say hello to the provided name')
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

program.parse(process.argv);
