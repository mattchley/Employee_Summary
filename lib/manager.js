const inquirer = require("inquirer");
const Employee = require ('./employee');

class Manager extends Employee {
  constructor(phone) {
    super(name, type, email, id);
    
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
    console.log(this.phone)
  };

};

module.exports = Manager