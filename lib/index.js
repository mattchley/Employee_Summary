
const inquirer = require("inquirer");
// const Manager = require('./lib/manager')
// const Engineer = require('./lib/engineer')
// const Intern = require('./lib/intern')

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
        return inquirer
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
            ])
            .then(function promptTree(newEmp) {
                if (newEmp.type === 'manager') {
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
                } else if (newEmp.type === 'engineer') {
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
                } else if (newEmp.type === 'intern') {
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
            });
    }







    // promptMore() {
    //   return inquirer
    //     .prompt(
    //       {
    //         type: "list",
    //         name: "cont",
    //         message: "Are there more people on the team?",
    //         choices: ['yes', 'no']
    //       }
    //     )
    // };

    continuePrompts(tree) {
        if (tree.cont === 'yes') {
            this.promptEmployee();
        } else if (tree.cont === 'no') {
            return
        }
    }
}
// process
async function init() {
    try {
        const employee = new Employee();
        // const manager = new Manager();
        // const engineer = new Engineer();
        // const intern = new Intern();

        Employee.id = 1;

        const newEmp = await employee.promptEmployee();

        // the prompTree() is the thing that is breaking because it is not waiting for feedback
        // const tree = await employee.promptTree(newEmp);
        // there is an issue where these two are running at the same time
        // const more = await employee.promptMore(tree);
        // const killSwitch = await employee.continuePrompts(tree);



    } catch (err) {
        console.log(err);
    }
};

init();







//   sets the id at 1

module.exports = Employee;