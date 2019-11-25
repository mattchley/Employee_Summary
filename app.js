// this will need to run everything
const inquirer = require("inquirer");
const employee = require('./lib/employee')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')

// 1.inquirer(documentation has examples)is async
// be sure to then to use the data or potentially if for employee type
function promptUser() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your full name?"
            },
            {
                type: "list",
                name: "employee",
                message: "What type of employee are you?",
                choices: ['manager', 'engineer', 'intern', 'finished'],

            },
            {
                type: "input",
                name: "email",
                message: "What is your email"
            },
            // If manager
            {
                type: "input",
                name: "phone",
                message: "What is your phone number?"
            },
            // If engineer
            {
                type: "input",
                name: "URL",
                message: "What is github URL?"
            },
            // If intern
            {
                type: "input",
                name: "school",
                message: "What school have you been to most recently?"
            },
        ])
};

// functions for inquirer seperations?
function manager() {
    if ('employee' === 'manager') {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "email",
                    message: "What is your email"
                },
                {
                    type: "input",
                    name: "phone",
                    message: "What is your phone number?"
                }
            ]

            )
            .then(promptUser())
    }

}
function engineer() {
    if ('employee' === 'engineer') {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "email",
                    message: "What is your email"
                },
                {
                    type: "input",
                    name: "URL",
                    message: "What is github URL?"
                }
            ]

            )
            .then(promptUser())
    }

}
function intern() {
    if ('employee' === 'intern') {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "email",
                    message: "What is your email"
                },
                {
                    type: "input",
                    name: "school",
                    message: "What school have you been to most recently?"
                }
            ]

            )
            .then(promptUser())
        
    }

}
function finished() {
    if ('employee' === 'finsihed') {
        // renderHTML
    }
}
// 2.employee
// 3.manager
// 4.engineer
// 5.intern
promptUser();