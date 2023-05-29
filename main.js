const inquirer = require('inquirer');
const term = require('terminal-kit').terminal;
const chalk = require('chalk');
const gradient = require('gradient-string');
const { linkText } = require('./utils');


function aboutMe() {

    console.log(gradient.cristal('\n👋 Hello! I\'m a passionate Software Development Engineer with expertise in the MERN stack.'));
    console.log(gradient.cristal('\n🚀 Skilled in full-stack web development, I excel in leveraging front-end technologies (HTML, CSS, JavaScript) and building robust back-end solutions using Node.js and Express.js. 🌐'));
    console.log(gradient.cristal('\n🔧 Detail-oriented and committed to code quality, I strive to deliver high-quality projects while adhering to best practices. ⚙️'));
    console.log(gradient.cristal('\n🎯 Constantly staying updated with the latest industry trends, I am a quick learner and continuously expanding my technical skillset. 📚'));
    console.log(gradient.cristal('\n💡 Solving complex problems and creating innovative solutions drive my passion for software development. 💪'));
    console.log(gradient.cristal('\nFeel free to connect with me to discuss exciting opportunities in web development or tech collaboration.'));
    console.log(gradient.cristal('\n📬 You can reach me via email at ') + (linkText("anjumanraj2@gmail.com", "mailto:anjumanraj2@gmail.com")))



    const question = {
        type: 'confirm',
        name: 'goToMain',
        message: 'Go to main menu?(default: Yes)',
        default: true, // Optional: Set the default value to `true` or `false`
    };

    inquirer.prompt(question)
        .then(answers => {
            const confirmed = answers.goToMain;
            if (confirmed) {
                mainPrompt();
            } else {
                console.log('\n👋 See you soon!');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });

}

function projects() {
    console.log(gradient.cristal('\n👋 Hello! I\'m a passionate Software Development Engineer with expertise in the MERN stack.'));
    console.log(gradient.cristal('\n🚀 Skilled in full-stack web development, I excel in leveraging front-end technologies (HTML, CSS, JavaScript) and building robust back-end solutions using Node.js and Express.js. 🌐'));
    console.log(gradient.cristal('\n🔧 Detail-oriented and committed to code quality, I strive to deliver high-quality projects while adhering to best practices. ⚙️'));
    console.log(gradient.cristal('\n🎯 Constantly staying updated with the latest industry trends, I am a quick learner and continuously expanding my technical skillset. 📚'));
    console.log(gradient.cristal('\n💡 Solving complex problems and creating innovative solutions drive my passion for software development. 💪'));
    console.log(gradient.cristal('\nFeel free to connect with me to discuss exciting opportunities in web development or tech collaboration.'));
    console.log(gradient.cristal('\n📬 You can reach me via email at ') + (linkText("anjumanraj2@gmail.com", "mailto:anjumanraj2@gmail.com")))



    const question = {
        type: 'confirm',
        name: 'goToMain',
        message: 'Go to main menu?(default: Yes)',
        default: true, // Optional: Set the default value to `true` or `false`
    };

    inquirer.prompt(question)
        .then(answers => {
            const confirmed = answers.goToMain;
            if (confirmed) {
                mainPrompt();
            } else {
                console.log('\n👋 See you soon!');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}


function skills() {
    console.log(gradient.cristal('\n👋 Hello! I\'m a passionate Software Development Engineer with expertise in the MERN stack.'));
    console.log(gradient.cristal('\n🚀 Skilled in full-stack web development, I excel in leveraging front-end technologies (HTML, CSS, JavaScript) and building robust back-end solutions using Node.js and Express.js. 🌐'));
    console.log(gradient.cristal('\n🔧 Detail-oriented and committed to code quality, I strive to deliver high-quality projects while adhering to best practices. ⚙️'));
    console.log(gradient.cristal('\n🎯 Constantly staying updated with the latest industry trends, I am a quick learner and continuously expanding my technical skillset. 📚'));
    console.log(gradient.cristal('\n💡 Solving complex problems and creating innovative solutions drive my passion for software development. 💪'));
    console.log(gradient.cristal('\nFeel free to connect with me to discuss exciting opportunities in web development or tech collaboration.'));
    console.log(gradient.cristal('\n📬 You can reach me via email at ') + (linkText("anjumanraj2@gmail.com", "mailto:anjumanraj2@gmail.com")))



    const question = {
        type: 'confirm',
        name: 'goToMain',
        message: 'Go to main menu?(default: Yes)',
        default: true, // Optional: Set the default value to `true` or `false`
    };

    inquirer.prompt(question)
        .then(answers => {
            const confirmed = answers.goToMain;
            if (confirmed) {
                mainPrompt();
            } else {
                console.log('\n👋 See you soon!');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

function contact() {
    console.log(gradient.cristal('\n👋 Hello! I\'m a passionate Software Development Engineer with expertise in the MERN stack.'));
    console.log(gradient.cristal('\n🚀 Skilled in full-stack web development, I excel in leveraging front-end technologies (HTML, CSS, JavaScript) and building robust back-end solutions using Node.js and Express.js. 🌐'));
    console.log(gradient.cristal('\n🔧 Detail-oriented and committed to code quality, I strive to deliver high-quality projects while adhering to best practices. ⚙️'));
    console.log(gradient.cristal('\n🎯 Constantly staying updated with the latest industry trends, I am a quick learner and continuously expanding my technical skillset. 📚'));
    console.log(gradient.cristal('\n💡 Solving complex problems and creating innovative solutions drive my passion for software development. 💪'));
    console.log(gradient.cristal('\nFeel free to connect with me to discuss exciting opportunities in web development or tech collaboration.'));
    console.log(gradient.cristal('\n📬 You can reach me via email at ') + (linkText("anjumanraj2@gmail.com", "mailto:anjumanraj2@gmail.com")))



    const question = {
        type: 'confirm',
        name: 'goToMain',
        message: 'Go to main menu?(default: Yes)',
        default: true, // Optional: Set the default value to `true` or `false`
    };

    inquirer.prompt(question)
        .then(answers => {
            const confirmed = answers.goToMain;
            if (confirmed) {
                mainPrompt();
            } else {
                console.log('\n👋 See you soon!');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}


function experience() {
    console.log(gradient.cristal('\n👋 Hello! I\'m a passionate Software Development Engineer with expertise in the MERN stack.'));
    console.log(gradient.cristal('\n🚀 Skilled in full-stack web development, I excel in leveraging front-end technologies (HTML, CSS, JavaScript) and building robust back-end solutions using Node.js and Express.js. 🌐'));
    console.log(gradient.cristal('\n🔧 Detail-oriented and committed to code quality, I strive to deliver high-quality projects while adhering to best practices. ⚙️'));
    console.log(gradient.cristal('\n🎯 Constantly staying updated with the latest industry trends, I am a quick learner and continuously expanding my technical skillset. 📚'));
    console.log(gradient.cristal('\n💡 Solving complex problems and creating innovative solutions drive my passion for software development. 💪'));
    console.log(gradient.cristal('\nFeel free to connect with me to discuss exciting opportunities in web development or tech collaboration.'));
    console.log(gradient.cristal('\n📬 You can reach me via email at ') + (linkText("anjumanraj2@gmail.com", "mailto:anjumanraj2@gmail.com")))



    const question = {
        type: 'confirm',
        name: 'goToMain',
        message: 'Go to main menu?(default: Yes)',
        default: true, // Optional: Set the default value to `true` or `false`
    };

    inquirer.prompt(question)
        .then(answers => {
            const confirmed = answers.goToMain;
            if (confirmed) {
                mainPrompt();
            } else {
                console.log('\n👋 See you soon!');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}


function education() {
    console.log(gradient.cristal('\n👋 Hello! I\'m a passionate Software Development Engineer with expertise in the MERN stack.'));
    console.log(gradient.cristal('\n🚀 Skilled in full-stack web development, I excel in leveraging front-end technologies (HTML, CSS, JavaScript) and building robust back-end solutions using Node.js and Express.js. 🌐'));
    console.log(gradient.cristal('\n🔧 Detail-oriented and committed to code quality, I strive to deliver high-quality projects while adhering to best practices. ⚙️'));
    console.log(gradient.cristal('\n🎯 Constantly staying updated with the latest industry trends, I am a quick learner and continuously expanding my technical skillset. 📚'));
    console.log(gradient.cristal('\n💡 Solving complex problems and creating innovative solutions drive my passion for software development. 💪'));
    console.log(gradient.cristal('\nFeel free to connect with me to discuss exciting opportunities in web development or tech collaboration.'));
    console.log(gradient.cristal('\n📬 You can reach me via email at ') + (linkText("anjumanraj2@gmail.com", "mailto:anjumanraj2@gmail.com")))



    const question = {
        type: 'confirm',
        name: 'goToMain',
        message: 'Go to main menu?(default: Yes)',
        default: true, // Optional: Set the default value to `true` or `false`
    };

    inquirer.prompt(question)
        .then(answers => {
            const confirmed = answers.goToMain;
            if (confirmed) {
                mainPrompt();
            } else {
                console.log('\n👋 See you soon!');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

function certificate() {
    console.log(gradient.cristal('\n👋 Hello! I\'m a passionate Software Development Engineer with expertise in the MERN stack.'));
    console.log(gradient.cristal('\n🚀 Skilled in full-stack web development, I excel in leveraging front-end technologies (HTML, CSS, JavaScript) and building robust back-end solutions using Node.js and Express.js. 🌐'));
    console.log(gradient.cristal('\n🔧 Detail-oriented and committed to code quality, I strive to deliver high-quality projects while adhering to best practices. ⚙️'));
    console.log(gradient.cristal('\n🎯 Constantly staying updated with the latest industry trends, I am a quick learner and continuously expanding my technical skillset. 📚'));
    console.log(gradient.cristal('\n💡 Solving complex problems and creating innovative solutions drive my passion for software development. 💪'));
    console.log(gradient.cristal('\nFeel free to connect with me to discuss exciting opportunities in web development or tech collaboration.'));
    console.log(gradient.cristal('\n📬 You can reach me via email at ') + (linkText("anjumanraj2@gmail.com", "mailto:anjumanraj2@gmail.com")))



    const question = {
        type: 'confirm',
        name: 'goToMain',
        message: 'Go to main menu?(default: Yes)',
        default: true, // Optional: Set the default value to `true` or `false`
    };

    inquirer.prompt(question)
        .then(answers => {
            const confirmed = answers.goToMain;
            if (confirmed) {
                mainPrompt();
            } else {
                console.log('\n👋 See you soon!');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

function por() {
    console.log(gradient.cristal('\n👋 Hello! I\'m a passionate Software Development Engineer with expertise in the MERN stack.'));
    console.log(gradient.cristal('\n🚀 Skilled in full-stack web development, I excel in leveraging front-end technologies (HTML, CSS, JavaScript) and building robust back-end solutions using Node.js and Express.js. 🌐'));
    console.log(gradient.cristal('\n🔧 Detail-oriented and committed to code quality, I strive to deliver high-quality projects while adhering to best practices. ⚙️'));
    console.log(gradient.cristal('\n🎯 Constantly staying updated with the latest industry trends, I am a quick learner and continuously expanding my technical skillset. 📚'));
    console.log(gradient.cristal('\n💡 Solving complex problems and creating innovative solutions drive my passion for software development. 💪'));
    console.log(gradient.cristal('\nFeel free to connect with me to discuss exciting opportunities in web development or tech collaboration.'));
    console.log(gradient.cristal('\n📬 You can reach me via email at ') + (linkText("anjumanraj2@gmail.com", "mailto:anjumanraj2@gmail.com")))



    const question = {
        type: 'confirm',
        name: 'goToMain',
        message: 'Go to main menu?(default: Yes)',
        default: true, // Optional: Set the default value to `true` or `false`
    };

    inquirer.prompt(question)
        .then(answers => {
            const confirmed = answers.goToMain;
            if (confirmed) {
                mainPrompt();
            } else {
                console.log('\n👋 See you soon!');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}





const mainPrompt = async () => {

    term.clear();
    term.windowTitle('Anjuman Raj - Portfolio');
    console.log(chalk.blueBright('Use --help or -h to see available commands'));

    const { choice } = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Select an option:',
        choices: [
            { name: 'About Me', value: 'aboutMe' },
            { name: 'Projects', value: 'projects' },
            { name: 'Skills', value: 'skills' },
            { name: 'Contact', value: 'contact' },
            { name: 'Experience', value: 'experience' },
            { name: 'Education', value: 'education' },
            { name: 'Certificate', value: 'certificate' },
            { name: 'POR', value: 'por' },
        ],
    });

    switch (choice) {
        case 'aboutMe':
            aboutMe();
            break;
        case 'projects':
            projects();
            break;
        case 'skills':
            skills();
            break;
        case 'contact':
            contact();
            break;
        case 'experience':
            experience();
            break;
        case 'education':
            education();
            break;
        case 'certificate':
            certificate();
            break;
        case 'por':
            por();
            break;
        default:
            break;
    }


}

module.exports = { mainPrompt };