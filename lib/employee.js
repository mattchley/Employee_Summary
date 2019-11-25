const inquirer = require("inquirer");
// const Manager = require('./lib/manager')
// const Engineer = require('./lib/engineer')
// const Intern = require('./lib/intern')

class Employee {
  constructor(name, employeeType, email, id) {
    this.name = name;
    this.employeeType = employeeType;
    this.email = email;
    this.id = id
    // adds 1 id for everyone on project
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
          name: "employee",
          message: "What type of employee are you?",
          choices: ['manager', 'engineer', 'intern', 'finished'],

        },
        {
          type: "input",
          name: "email",
          message: "What is your email"
        }
      ])

  };

  promptManager() {
    return inquirer
      .prompt(
        // If manager
        {
          type: "input",
          name: "phone",
          message: "What is your phone number?"
        }
      )
  };

  promptEngineer() {
    return inquirer
      .prompt(
        // If engineer
        {
          type: "input",
          name: "URL",
          message: "What is github URL?"
        }
      )
  };

  promptIntern() {
    return inquirer
      .prompt(
        // If intern
        {
          type: "input",
          name: "school",
          message: "What school have you been to most recently?"
        }
      )
  };

  promptMore() {
    return inquirer
      .prompt(
        {
          type: "input",
          name: "more",
          message: "Are there more people on the team?"
        }
      )
  }
  

}
// process

const employee = new Employee ();

employee.promptEmployee();

console.log(employee)




//   sets the id at 1
Employee.id = 1;
module.exports = Employee;