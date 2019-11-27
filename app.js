const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');

// Initialize a new Employee Object
const worker = new Employee();

// tree
async function init(){
    try{
        const fullName = await worker.getName();
        const id = await worker.getId();
        const email = await worker.getEmail();
        const role = await worker.getRole();
        
    } catch (err) {
        console.log(err);
      }
};

init();

