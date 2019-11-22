const Employee = require("./employee");

class Manager extends Employee {
    constructor(phone) {

        super(name, employeeType, email, id);
        // Objects in constructor
        this.phone = phone;
    }
};

module.exports = Manager