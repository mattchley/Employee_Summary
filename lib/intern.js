const inquirer = require("inquirer");
const Employee = require ('./employee');

class Intern extends Employee {
  constructor(name, role, email, id, school) {
    super(name, role, email, id);
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
    return this.school
  };

};

module.exports = Intern