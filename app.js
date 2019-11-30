const inquirer = require("inquirer");
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');

function getName() {

    return inquirer
        .prompt(
            {
                type: "input",
                name: "name",
                message: "What is your full name?"
            })

};

function getId() {

    return inquirer
        .prompt(
            {
                type: "input",
                name: "id",
                message: "What is your id?"
            })
};

function getEmail() {

    return inquirer
        .prompt(
            {
                type: "input",
                name: "email",
                message: "What is your email"
            })

};

function getRole() {
    return inquirer
        .prompt(
            {
                type: "list",
                name: "role",
                message: "What type of employee are you?",
                choices: ['manager', 'engineer', 'intern']
            }
        )

};

function getPhone() {
    return inquirer
        .prompt(
            {
                type: "input",
                name: "phone",
                message: "What is your phone number? (if you are not manger leave blank)"
            })
};

function getGithub() {
    return inquirer
        .prompt(
            // If engineer
            {
                type: "input",
                name: "URL",
                message: "What is github URL? (if you are not engineer leave blank)"
            })
};

function getSchool() {
    return inquirer
        .prompt(
            // If intern
            {
                type: "input",
                name: "school",
                message: "What school have you been to most recently? (if you are not intern leave blank)"
            })
};

// tree
async function init() {
    try {
        const name = await getName();
        const id = await getId();
        const email = await getEmail();
        const role = await getRole();
        const phone = await getPhone();
        const URL = await getGithub()
        const school = await getSchool();

        let worker = await new Employee(name, role, email, id);
        let manager = await new Manager(name, role, email, id, phone);
        let engineer = await new Engineer(name, role, email, id, URL);
        let intern = await new Intern(name, role, email, id, school);
        // now that the info is pushes to the objs the info needs to put on the snippets in Lib

        
        console.log(worker)
        console.log(manager)
        console.log(engineer)
        console.log(intern)



    } catch (err) {
        console.log(err);
    }
};

init();

