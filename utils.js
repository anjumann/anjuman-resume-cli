const chalk = require("chalk");
const colors = require('ansi-colors');


const linkText = (text, url) => {
    return chalk.blueBright.underline(`\u001b]8;;${url}\u001b\\${text}\u001b]8;;\u001b\\`);
}

const test = () => {

   
}

module.exports = { linkText, test };