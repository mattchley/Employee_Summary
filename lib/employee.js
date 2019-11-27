const inquirer = require("inquirer");


class Employee {
  constructor(name, role, email, id) {
    this.name = name;
    this.role = role;
    this.email = email;
    this.id = id
    // adds 1 id for everyone on project(doesn't work currently 11/25)
    Employee.id++;
  }
  getName() {
    return inquirer
      .prompt(
        {
          type: "input",
          name: "name",
          message: "What is your full name?"
        })
  };
  getId() {
    return inquirer
      .prompt(
        {
          type: "input",
          name: "id",
          message: "What is your id?"
        })
  };
  getEmail() {
    return inquirer
      .prompt(
        {
          type: "input",
          name: "email",
          message: "What is your email"
        })
  };
  getRole() {
    return inquirer
      .prompt(
        {
          type: "list",
          name: "role",
          message: "What type of employee are you?",
          choices: ['manager', 'engineer', 'intern']
        }
      )
  };
  getSubclass(subclass) {
    if (subclass.role === 'manager') {
      return inquirer
        .prompt(
          {
            type: "input",
            name: "phone",
            message: "What is your phone number?"
          })
    } else if (subclass.role === 'engineer') {
      return inquirer
        .prompt(
          // If engineer
          {
            type: "input",
            name: "URL",
            message: "What is github URL?"
          })
    } else if (subclass.role === 'intern') {
      return inquirer
        .prompt(
          // If intern
          {
            type: "input",
            name: "school",
            message: "What school have you been to most recently?"
          })
    }
  }
}


module.exports = Employee;