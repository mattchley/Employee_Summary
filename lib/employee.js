
const inquirer = require("inquirer");
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

class Employee {
  constructor(name, type, email, id) {
    this.name = name;
    this.type = type;
    this.email = email;
    this.id = id
    // adds 1 id for everyone on project(doesn't work currently 11/25)
    Employee.id++;
  }
  getName() {
    inquirer
      .prompt(
        {
          type: "input",
          name: "name",
          message: "What is your full name?"
        })
  };
  // getId() {
  //   inquirer
  //     .prompt(
  //       {
  //         type: "input",
  //         name: "id",
  //         message: "What is your id?"
  //       })
  // };
  getEmail() {
    inquirer
      .prompt(
        {
          type: "input",
          name: "email",
          message: "What is your email"
        })
  };
  getRole() {
    inquirer
      .prompt(
        {
          type: "list",
          name: "type",
          message: "What type of employee are you?",
          choices: ['manager', 'engineer', 'intern']
        })
  };

  init() {
    this.id = 1;
    this.promptEmployee();
  };
}

module.exports = Employee;