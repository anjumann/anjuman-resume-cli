const inquirer = require('inquirer');
const term = require('terminal-kit').terminal;
const chalk = require('chalk');
const gradient = require('gradient-string');
const { linkText } = require('./utils');
const Table = require('cli-table');

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

    const project = [
        {
            "name": '📦 1. Project 1',
            "desc": ' project 1 description',
            "link": "https://github.com/anjumann"
        },
        {
            "name": '📦 2. Project 2',
            "desc": ' project 2 description',
            "link": "https://github.com/anjumann"
        },
        {
            "name": '📦 3. Project 3',
            "desc": ' project 3 description',
            "link": "https://github.com/anjumann"
        },
        {
            "name": '📦 4. Project 4',
            "desc": ' project 4 description',
            "link": "https://github.com/anjumann"
        },
    ]
    console.log(gradient.cristal('\nComing soon...'));
    console.table(project);



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


    console.log(gradient.cristal('\n my skills are:'));

    const skills = [
        {
            "skill set": "Front-end",
            skills: [
                {
                    "name": "react.js",
                },
                {
                    "name": "Tailwind CSS",
                },
                {
                    "name": "JavaScript",
                },
            ]
        },
        {
            "skill set": "Back-end",
            skills: [
                {
                    "name": "JavaScript",
                },
                {
                    "name": "Node.JS",
                },
                {
                    "name": "MongoDB",
                },
                {
                    "name": "Python",
                },
                {
                    "name": "Firebase",
                },
                {
                    "name": "Django",
                },
                {
                    "name": "Flask",
                },
            ]
        },
        {
            "skill set": "Tools",
            skills: [
                {
                    "name": "react.js",
                },
                {
                    "name": "Tailwind CSS",
                },
                {
                    "name": "JavaScript",
                },
            ]
        },
        {
            "skill set": "DevOps",
            skills: [
                {
                    "name": "react.js",
                },
                {
                    "name": "Tailwind CSS",
                },
                {
                    "name": "JavaScript",
                },
            ]
        },

    ]

    const table = new Table({
        head: ['Skill Set', 'Skills']
    });

    skills.forEach((category) => {
        const { "skill set": skillSet, skills } = category;
        const skillNames = skills.map((skill) => skill.name).join(", ");
        table.push([skillSet, skillNames]);
    });

    console.log(table.toString());

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



    console.log(gradient.cristal('\nFeel free to connect with me to discuss exciting opportunities.'));
    console.log(gradient.cristal('\n📬 You can reach me via email at ') + (linkText("anjumanraj2@gmail.com", "mailto:anjumanraj2@gmail.com")))
    console.log(gradient.cristal('\n📞 You can reach me via phone at ') + (linkText("+91 9649409088", "tel:9649409088")))
    console.log(gradient.cristal('\n🔗 You can reach me at LinkedIn ') + (linkText("anjuman-raj", "https://www.linkedin.com/in/anjuman-raj/")))
    console.log(gradient.cristal('\n🔗 Check out my GitHub profile ') + (linkText("anjumann", "https://github.com/anjumann")))
    console.log(gradient.cristal('\n🔗 Check out my portfolio ') + (linkText("anjuman.tech", "https://anjuman.tech")))

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
    console.log(gradient.cristal('\nComing soon...'));




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
    console.log(gradient.cristal('\nComing soon...'));

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
    console.log(gradient.cristal('\nComing soon...'));

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
    console.log(gradient.cristal('\nComing soon...'));

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
        case 'exit':
            process.exit(0);
            break;
        default:
            break;
    }


}

module.exports = { mainPrompt };