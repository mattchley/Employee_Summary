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
        }). then (function(res){
          return res
        })
  };
  getId() {
    return inquirer
      .prompt(
        {
          type: "input",
          name: "id",
          message: "What is your id?"
        }). then (function(res){
          return res
        })
  };
  getEmail() {
    return inquirer
      .prompt(
        {
          type: "input",
          name: "email",
          message: "What is your email"
        }). then (function(res){
          return res
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
      ). then (function(res){
        return res
      })
  };
}

module.exports = Employee;