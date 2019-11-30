const fs = require("fs")
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


        // employee team
        // var newWorker = fs.readFileSync('./template/main.html', { encoding: 'utf8' });
        // let replaceWorker = templateFile.replace('{{name}}', 'obj info');
        // // then write onto the main.html with replace.({{ team }}, );

        // Manager
        var newManager = fs.readFileSync('./template/manager.html', { encoding: 'utf8' });
        let replaceMangerName =  newManager.replace(`{{name}}` , manager.name);
        let replaceManagerEmail = newManager.replace(`{{email}}`, manager.email);
        let replaceManagerId = newManager.replace(`{{id}}`, manager.id);
        let replaceManagerRole = newManager.replace(`{{role}}`, manager.role);
        let replaceManagerPhone = newManager.replace(`{{officeNumber}}`, manager.phone);
        console.log(`${newManager} has been written`)
        
    
        // then write onto the main.html with replace.({{ team }}, );

        // // Engineer
        // var newEngineer = fs.readFileSync('./template/engineer.html', { encoding: 'utf8' });
        // let replaceEngineer = templateFile.replace('{{github}}', engineer.URL);
        // // then write onto the main.html with replace.({{ team }}, );

        // // employee
        // var newINtern = fs.readFileSync('./template/intern.html', { encoding: 'utf8' });
        // let replaceIntern = templateFile.replace('{{school}}', intern.school);
        // // then write onto the main.html with replace.({{ team }}, );

    } catch (err) {
        console.log(err);
    }
};

init();

