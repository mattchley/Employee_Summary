const inquirer = require("inquirer");
class Intern extends Employee {
  constructor(school) {
    this.school = school;

    super(name, type, email, id);
  }
  getSchool() {
    inquirer
      .prompt(
        // If intern
        {
          type: "input",
          name: "school",
          message: "What school have you been to most recently?"
        })
  };
  getRole() {

  };

};

module.exports = Intern