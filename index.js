#!/usr/bin/env node
const {aboutMe} = require('./sections/about');
const { program } = require('commander');


program
  .description('Main Menu')
  .action(() => {
    // headerFiglet();
    aboutMe();
  });

program
  .command('add <a> <b>')
  .description('Add two numbers')
  .action((a, b) => { console.log(parseInt(a) + parseInt(b)); });

program.parse(process.argv);
