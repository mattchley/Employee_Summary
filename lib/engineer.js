const inquirer = require("inquirer");
class Engineer{
    constructor(URL) {
        // Objects in constructor
        this.URL = URL;
    }
    promptEngineer() {
        return inquirer
          .prompt([
            // If engineer
            {
              type: "input",
              name: "URL",
              message: "What is github URL?"
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

module.exports = Engineer