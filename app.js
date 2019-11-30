const fs = require("fs")
const inquirer = require("inquirer");
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');


function inqName() {

    return inquirer
        .prompt(
            {
                type: "input",
                name: "name",
                message: "What is your full name?"
            })

};

function inqId() {

    return inquirer
        .prompt(
            {
                type: "input",
                name: "id",
                message: "What is your id?"
            })
};

function inqEmail() {

    return inquirer
        .prompt(
            {
                type: "input",
                name: "email",
                message: "What is your email"
            })

};

function inqRole() {
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

function inqPhone() {
    return inquirer
        .prompt(
            {
                type: "input",
                name: "phone",
                message: "What is your phone number? (if you are not manger leave blank)"
            })
};

function inqGithub() {
    return inquirer
        .prompt(
            // If engineer
            {
                type: "input",
                name: "URL",
                message: "What is github URL? (if you are not engineer leave blank)"
            })
};

function inqSchool() {
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
        const name = await inqName();
        const id = await inqId();
        const email = await inqEmail();
        const role = await inqRole();
        const phone = await inqPhone();
        const URL = await inqGithub()
        const school = await inqSchool();

        let worker = await new Employee(name, role, email, id);
        let manager = await new Manager(name, role, email, id, phone);
        let engineer = await new Engineer(name, role, email, id, URL);
        let intern = await new Intern(name, role, email, id, school);
        // now that the info is pushes to the objs the info needs to put on the snippets in Lib


        // employee team
        var newWorker = fs.readFileSync('./template/main.html', { encoding: 'utf8' });
        let replaceWorker = templateFile.replace('{{ team }}', 'obj info');
        
        // Manager

        var newManager = fs.readFileSync('./template/manager.html', { encoding: 'utf8' });
        let replaceManagerName = newManager.replace('{{ name }}' , JSON.stringify(worker.name.name));
        let replaceManagerRole = newManager.replace('{{ role }}' , JSON.stringify(worker.role.role));
        let replaceManagerEmail = newManager.replace('{{ email }}' , JSON.stringify(worker.email.email));
        let replaceManagerId = newManager.replace('{{ id }}' , JSON.stringify(worker.id.id));
        let replaceManagerPhone = newManager.replace('{{ officeNumber }}' , JSON.stringify(manager.phone.phone));
      
        // Engineer
        var newEngineer = fs.readFileSync('./template/engineer.html', { encoding: 'utf8' });
        let replaceEngineerName = newManager.replace('{{ name }}' , JSON.stringify(worker.name.name));
        let replaceEngineerRole = newManager.replace('{{ role }}' , JSON.stringify(worker.role.role));
        let replaceEngineerEmail = newManager.replace('{{ email }}' , JSON.stringify(worker.email.email));
        let replaceEngineerId = newManager.replace('{{ id }}' , JSON.stringify(worker.id.id));
        let replaceEngineerPhone = newManager.replace('{{ officeNumber }}' , JSON.stringify(engineer.URL.URL));

        // Intern
        var newIntern = fs.readFileSync('./template/intern.html', { encoding: 'utf8' });
        let replaceInternName = newManager.replace('{{ name }}' , JSON.stringify(worker.name.name));
        let replaceInternRole = newManager.replace('{{ role }}' , JSON.stringify(worker.role.role));
        let replaceInternEmail = newManager.replace('{{ email }}' , JSON.stringify(worker.email.email));
        let replaceInternId = newManager.replace('{{ id }}' , JSON.stringify(worker.id.id));
        let replaceInternPhone = newManager.replace('{{ officeNumber }}' , JSON.stringify(intern.school.school));

    } catch (err) {
        console.log(err);
    }
};

init();

