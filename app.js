const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');

// Initialize a new Employee Object
let worker = new Employee(fullName, subclass, contact, count);
let engineer = new Engineer(fullName, subclass, contact, count, gitHub)
// where gitHub is an inuirer function asking about github page
let manger = new Manager(fullName, subclass, contact, count, tele)
// where tele is an inquirer function asking about telephone number
let intern = new Intern(fullName, subclass, contact, count, BS)
// where BS is an inquirer function asking about school
// seperate inquirer here and keep the consts, then after the costs are answere feed them into above

// tree
async function init(){
    try{
        const fullName = await worker.getName();
        const count = await worker.getId();
        const contact = await worker.getEmail();
        const subclass = await worker.getRole();
        const tree = await worker.getSubclass(subclass)
        // i am unable to push the info from inquirer to object
        
        
    } catch (err) {
        console.log(err);
      }
};

init();

