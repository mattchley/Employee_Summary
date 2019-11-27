const inquirer = require("inquirer");

class Manager extends Employee {
  constructor(phone) {
    // Objects in constructor
    this.phone = phone;

    super(name, type, email, id);
  }
  getPhone(){
    inquirer
    .prompt(
      {
        type: "input",
        name: "phone",
        message: "What is your phone number?"
      })
  };
  getRole(){

  };

};

module.exports = Manager