const inquirer = require("inquirer");
const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, role, email, id, URL) {
    // Objects in constructor
    super(name, role, email, id);
    this.URL = URL;

    
  }
  getGithub() {
    return inquirer
      .prompt(
        // If engineer
        {
          type: "input",
          name: "URL",
          message: "What is github URL?"
        })
  };
  getRole() {
    return this.URL
  };

};

module.exports = Engineer