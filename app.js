// this will need to run everything
const inquirer = require("inquirer");
const employee = require('./lib/employee')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')

// 1.inquirer
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
                message: "What is type of employee are you?"
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
    // 2.employee
    // 3.manager
    // 4.engineer
    // 5.intern
promptUser();