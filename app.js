const inquirer = require("inquirer");
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
const render = require("./render");

const teamMembers = []

function createTeam() {

    inquirer
        .prompt([

            {
                type: "list",
                name: "role",
                message: "What role do you play?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "No more employees"
                ]
            }

        ]).then(userChoice => {
            switch (userChoice.role) {
                case "Manager":
                    addManager();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;

                case "No more employees":
                    render(teamMembers);
                    break

            }
        })


    function addManager() {

        inquirer
            .prompt([

                {
                    type: "input",
                    message: "What is your first name?",
                    name: "managerName"
                },

                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "managerID"
                },

                {
                    type: "input",
                    message: "What is your email?",
                    name: "managerEmail"
                },

                {
                    type: "input",
                    message: "What is your office number?",
                    name: "managerOfficeNumber"
                }

            ]).then(userChoice => {
                console.log(userChoice);

                const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)

                teamMembers.push(manager)

                createTeam();

            })


    }


    function addEngineer() {
        inquirer
            .prompt([

                {
                    type: "input",
                    message: "What is your first name?",
                    name: "engineerName"
                },

                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "engineerID"
                },

                {
                    type: "input",
                    message: "What is your email?",
                    name: "engineerEmail"
                },

                {
                    type: "input",
                    message: "What is your GitHub username?",
                    name: "gitHubUsername"
                }
            ]).then(userChoice => {
                console.log(userChoice);

                const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername)

                teamMembers.push(engineer)

                createTeam();

            })
    }




    function addIntern() {

        inquirer
            .prompt([

                {
                    type: "input",
                    message: "What is your first name?",
                    name: "internName"
                },

                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "internID"
                },

                {
                    type: "input",
                    message: "What is your email?",
                    name: "internEmail"
                },

                {
                    type: "input",
                    message: "What is your school?",
                    name: "internSchool"
                }
            ]).then(userChoice => {
                console.log(userChoice);

                const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)

                teamMembers.push(intern)

                createTeam();
            })
    }
}

module.exports = teamMembers

createTeam();