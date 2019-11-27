
const inquirer = require("inquirer");
// const Manager = require('./Manager')
// const Engineer = require('./Engineer')
// const Intern = require('./Intern')

class Employee {
    constructor(name, type, email, id) {
        this.name = name;
        this.type = type;
        this.email = email;
        this.id = id
        // adds 1 id for everyone on project(doesn't work currently 11/25)
        Employee.id++;
    }


    promptEmployee() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is your full name?"
                },
                {
                    type: "list",
                    name: "type",
                    message: "What type of employee are you?",
                    choices: ['manager', 'engineer', 'intern'],

                },
                {
                    type: "input",
                    name: "email",
                    message: "What is your email"
                }
            ]).then(res => {
                if (res.type === 'manager') {
                    this.promptManager();
                } else if (res.type === 'engineer') {
                    this.promptEngineer();
                } else if (res.type === 'intern') {
                    this.promptIntern();
                }
            })
    };
    promptEngineer() {
        inquirer
            .prompt([
                // If engineer
                {
                    type: "input",
                    name: "URL",
                    message: "What is github URL?"
                },
                {
                    type: "list",
                    name: "cont",
                    message: "Are there more people on the team?",
                    choices: ['yes', 'no']
                }
            ]
            )
    };
    promptIntern() {
        inquirer
            .prompt([
                // If intern
                {
                    type: "input",
                    name: "school",
                    message: "What school have you been to most recently?"
                },
                {
                    type: "list",
                    name: "cont",
                    message: "Are there more people on the team?",
                    choices: ['yes', 'no']
                }
            ])
    };
    promptManager() {
        inquirer
            .prompt([
                // If manager
                {
                    type: "input",
                    name: "phone",
                    message: "What is your phone number?"
                },
                {
                    type: "list",
                    name: "cont",
                    message: "Are there more people on the team?",
                    choices: ['yes', 'no']
                }
            ]
            )
    };


    init() {
        this.id = 1;
        this.promptEmployee();
    };
}

init();

module.exports = Employee;