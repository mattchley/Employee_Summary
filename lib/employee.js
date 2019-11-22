class Employee {
    constructor(name, employeeType, email, id) {
      this.name = name;
      this.employeeType = employeeType;
      this.email = email;
      this.id = id
        // adds 1 id for everyone on project
      Employee.id++;
    }
  }
//   sets the id at 1
  Employee.id = 1;
  module.exports = Employee;