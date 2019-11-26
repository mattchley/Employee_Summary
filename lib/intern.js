const Employee = require("./employee");

class Intern extends Employee {
    constructor(school) {

        super(name, employeeType, email, id);
        // Objects in constructor
        this.school = school;
    }
    promptIntern() {
        return inquirer
          .prompt([
            // If intern
            {
              type: "input",
              name: "school",
              message: "What school have you been to most recently?"
            },
            {
              type: "list",
              name: "cont",
              message: "Are there more people on the team?",
              choices: ['yes', 'no']
            }
          ])
      };
};

module.exports = Intern