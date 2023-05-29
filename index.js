#!/usr/bin/env node
const {aboutMe} = require('./sections/about');
const { program } = require('commander');
const { mainPrompt } = require('./sections/main');
const { test } = require('./sections/utils');


program
  .description('Main Menu')
  .action(() => {
    mainPrompt();
    // test()
  });

program
  .command('sample <a> <b>')
  .description('sample')
  .action((a, b) => { console.log(parseInt(a) + parseInt(b)); });

program.parse(process.argv);
