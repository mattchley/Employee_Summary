
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
      ]). then (res =>{
        if(res.type === 'manager'){
          this.currentManager = new Manager
          this.currentManager.promptManager();
        } else if( res.type === 'engineer'){
          this.currentEngineer = new Engineer
          this.currentEngineer.promptEngineer();
        } else if( res.type === 'intern'){
          this.currentIntern = new Intern
          this.currentIntern.promptIntern();
        }
      })
  };

  init() {
    this.id = 1;
    const Nemployee = this.promptEmployee();
    
  };
}

module.exports = Employee;