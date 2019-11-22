// this will need to run everything
const inquirer = require("inquirer");

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
            {
                type: "input",
                name: "phone",
                message: "What is your phone number?"
            },
            {
                type: "input",
                name: "URL",
                message: "What is github URL?"
            },
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
