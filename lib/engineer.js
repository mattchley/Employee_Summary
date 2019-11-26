const Employee = require("./employee");

class Engineer extends Employee {
    constructor(URL) {

        super(name, employeeType, email, id);
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