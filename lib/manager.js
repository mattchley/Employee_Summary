const inquirer = require("inquirer");
const Employee = require ('./employee');

class Manager extends Employee {
  constructor(name, role, email, id, phone) {
    super(name, role, email, id);
    
    this.phone = phone;    
  }
  getPhone(){
    return this.phone
  };
  getRole(){
    return this.phone
  };

};

module.exports = Manager