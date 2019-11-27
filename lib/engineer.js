const inquirer = require("inquirer");
class Engineer extends Employee {
  constructor(URL) {
    // Objects in constructor
    this.URL = URL;

    super(name, type, email, id);
  }
  getGithub(){
    inquirer
    .prompt(
      // If engineer
      {
        type: "input",
        name: "URL",
        message: "What is github URL?"
      })
  };
  getRole(){

  };

};

module.exports = Engineer