const inquirer = require("inquirer");
const Employee = require ('./employee');

class Intern extends Employee {
  constructor(name, role, email, id, school) {
    super(name, role, email, id);
    this.school = school;

    
  }
  getSchool() {
    return this.school
  };
  getRole() {
    return this.school
  };

};

module.exports = Intern