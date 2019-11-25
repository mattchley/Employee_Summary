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
  
  promptTree(){
    // runs through all of them
    if ( this.employeeType  === 'manager'){
      this.promptManager();
    };
    if ( this.employeeType  === 'engineer'){
      this.promptEngineer();
    }
    if ( this.employeeType  === 'intern'){
      this.promptIntern();
    }
  }

}
// process
async function init() {
  try {
    const employee = new Employee ();
    Employee.id = 1;
    const newEmp = await employee.promptEmployee();
    const tree = await employee.promptTree(newEmp);
    const newMang = await employee.promptManager(tree);
    const newEng = await employee.promptEngineer(tree);
    const newInt = await employee.promptIntern(tree);
    console.log(newMang, newEng, newInt)

  } catch (err) {
    console.log(err);
  }
};

init();







//   sets the id at 1

module.exports = Employee;