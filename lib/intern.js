const Employee = require("./employee");

class Intern extends Employee {
    constructor(school) {

        super(name, employeeType, email, id);
        // Objects in constructor
        this.school = school;
    }
};

module.exports = Intern