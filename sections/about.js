
const chalk = require('chalk');
const figlet = require('figlet');
const gradient = require('gradient-string');
const { SingleBar } = require('cli-progress');
const { linkText } = require('./utils');


const headerFiglet = () => {

    figlet("Hii, I'm Anjuman Raj ", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(gradient.fruit(data));
    });


}

const aboutMe = () => {

    console.log(gradient.cristal('\n👋 Hello! I\'m a passionate Software Development Engineer with expertise in the MERN stack.'));
    console.log(gradient.cristal('\n🚀 Skilled in full-stack web development, I excel in leveraging front-end technologies (HTML, CSS, JavaScript) and building robust back-end solutions using Node.js and Express.js. 🌐'));
    console.log(gradient.cristal('\n🔧 Detail-oriented and committed to code quality, I strive to deliver high-quality projects while adhering to best practices. ⚙️'));
    console.log(gradient.cristal('\n🎯 Constantly staying updated with the latest industry trends, I am a quick learner and continuously expanding my technical skillset. 📚'));
    console.log(gradient.cristal('\n💡 Solving complex problems and creating innovative solutions drive my passion for software development. 💪'));
    console.log(gradient.cristal('\nFeel free to connect with me to discuss exciting opportunities in web development or tech collaboration.'));
    console.log('\n📬 You can reach me via email at '+ (linkText("anjumanraj2@gmail.com", "mailto:anjumanraj2@gmail.com")))
}


module.exports = { headerFiglet, aboutMe };