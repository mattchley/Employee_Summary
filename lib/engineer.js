const inquirer = require("inquirer");
const Employee = require('./employee');

class Engineer extends Employee {
  constructor(URL) {
    // Objects in constructor
    super(name, type, email, id);
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
    console.log(this.URL)
  };

};

module.exports = Engineer