const inquirer = require("inquirer");
class Manager{
    constructor(phone) {
        // Objects in constructor
        this.phone = phone;
    }
    promptManager() {
        return inquirer
          .prompt([
            // If manager
            {
              type: "input",
              name: "phone",
              message: "What is your phone number?"
            },
            {
              type: "list",
              name: "cont",
              message: "Are there more people on the team?",
              choices: ['yes', 'no']
            }
          ]
          )
      };
};

module.exports = Manager