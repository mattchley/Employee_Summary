class Employee {
    constructor(name, role, email, id) {
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id
    }
    getName() {
        return this.name
    };
    getId() {
        return this.id
    };
    getEmail() {
        return this.email
    };
    getRole() {
        return this.role
    };
    getSubclass() {

    }
}

class Manager extends Employee {
    constructor(name, type, email, id, phone) {
        super(name, type, email, id);

        this.phone = phone;
    }
    getPhone() {
        return this.phone
    };
    getRole() {
        // returns manger + employee
    };

};

class Engineer extends Employee {
    constructor(name, type, email, id, URL) {
        super(name, type, email, id);
        this.URL = URL;


    }
    getGithub() {
        return this.URL
    };
    getRole() {
        // returns manger + engineer
    };

};

class Intern extends Employee {
    constructor(name, type, email, id, school) {
        super(name, type, email, id);
        this.school = school;


    }
    getSchool() {
        return this.school
    };
    getRole() {
        // returns manger + intern
    };

};

let worker = new Employee();
let manger = new Manager();
let engineer = new Engineer();
let intern = new Intern()

// module.exports = Employee