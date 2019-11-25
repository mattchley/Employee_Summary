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
      ]).then(function ({ type }) {
        return { type }
      })

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

  promptTree(newEmp) {
    if (newEmp.type === 'manager') {
      this.promptManager();
    } else if (newEmp.type === 'engineer') {
      this.promptEngineer();
    } else if (newEmp.type === 'intern') {
      this.promptIntern();
    }
  };

  promptMore() {
    return inquirer
      .prompt(
        {
          type: "list",
          name: "cont",
          message: "Are there more people on the team?",
          choices: ['yes', 'no']
        }
      )
  };

  continuePrompts(more) {
    if (more.cont === 'yes') {
      this.promptEmployee();
    } else if (more.cont === 'no') {
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
    // const tree = await employee.promptTree(newEmp);
    const more = await employee.promptMore();
    const killSwitch = await employee.continuePrompts(more);

    console.log();

  } catch (err) {
    console.log(err);
  }
};

init();







//   sets the id at 1

module.exports = Employee;