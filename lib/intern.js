const inquirer = require("inquirer");
const Employee = require ('./employee');

class Intern extends Employee {
  constructor(school) {
    super(name, type, email, id);
    this.school = school;

    
  }
  getSchool() {
    return inquirer
      .prompt(
        // If intern
        {
          type: "input",
          name: "school",
          message: "What school have you been to most recently?"
        })
  };
  getRole() {
    console.log(this.school)
  };

};

module.exports = Intern