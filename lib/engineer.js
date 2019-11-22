const Employee = require("./employee");

class Engineer extends Employee {
    constructor(URL) {

        super(name, employeeType, email, id);
        // Objects in constructor
        this.URL = URL;
    }
};

module.exports = Engineer