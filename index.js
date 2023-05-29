#!/usr/bin/env node
const { program } = require('commander');
const { mainPrompt } = require('./main');



program.version('1.0.0').description('My Portfolio');


program.action(() => {
  mainPrompt();
});

program
  .command('main')
  .description('Go to main menu')
  .action(() => {
    mainPrompt();
  });


program
  .command('about')
  .description('Go to about section')
  .action(() => {
    aboutMe();
  });


program
  .command('projects')
  .description('Go to projects section')
  .action(() => {
    projects();
  });


program
  .command('skills')
  .description('Go to skills section')
  .action(() => {
    skills();
  });


program
  .command('contact')
  .description('Go to contact section')
  .action(() => {
    contact();
  });


program
  .command('experience')
  .description('Go to experience section')
  .action(() => {
    experience();
  });


program
  .command('education')
  .description('Go to education section')
  .action(() => {
    education();
  });


program
  .command('certifications')
  .description('Go to certificate section')
  .action(() => {
    certificate();
  });

program
  .command('POR')
  .description('Go to certificate section')
  .action(() => {
    por();
  });





program.parse(process.argv);
