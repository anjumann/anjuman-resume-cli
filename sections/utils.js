const chalk = require("chalk");


const linkText = (text, url) => {

    return chalk.blueBright.underline(`\u001b]8;;${url}\u001b\\${text}\u001b]8;;\u001b\\`);

}


module.exports = { linkText };