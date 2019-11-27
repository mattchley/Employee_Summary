const inquirer = require("inquirer");
const Employee = require ('./employee');

class Manager extends Employee {
  constructor(name, role, email, id, phone) {
    super(name, role, email, id);
    
    this.phone = phone;    
  }
  getPhone(){
    return inquirer
    .prompt(
      {
        type: "input",
        name: "phone",
        message: "What is your phone number?"
      })
  };
  getRole(){
    return this.phone
  };

};

module.exports = Manager