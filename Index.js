const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./utils/generate-site');


const employees = [];

class Prompter {
    async managerPrompt() {
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the team manager's name.",
                    validate: nameInput => {
                        if (nameInput){
                            return true;
                        } else {
                            console.log(" Please enter a valid name.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter the team manager's ID.",
                    validate: idInput => {
                        if (!isNaN(idInput) && idInput) {
                            return true;
                        } else {
                            console.log(" Please enter a valid ID number.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message:"Please enter team manager's email.",
                    validate: emailInput => {
                        if (emailInput.includes("@") && emailInput.includes(".com")) {
                            return true;
                        } else {
                            console.log(" Please enter a valid email address.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "What is the team manager's office number?",
                    validate: officeInput => {
                        if (!isNaN(officeInput) && officeInput) {
                            return true;
                        } else {
                            console.log(" Please enter the team manager's office number.");
                            return false;
                        }
                    }
                }
            ]) .then((response) => {
                    const manager = new Manager (
                        response.name,
                        response.id,
                        response.email,
                        response.officeNumber
                    );
                    employees.push(manager);
                    console.table(employees);
                    this.addEmployee();
            });
    }

    async engineerPrompt() {
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the engineer's name.",
                    validate: nameInput => {
                        if (nameInput){
                            return true;
                        } else {
                            console.log(" Please enter a valid name.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter the engineer's ID.",
                    validate: idInput => {
                        if (!isNaN(idInput) && idInput) {
                            return true;
                        } else {
                            console.log(" Please enter a valid ID number.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message:"Please enter the engineer's email.",
                    validate: emailInput => {
                        if (emailInput.includes("@") && emailInput.includes(".com")) {
                            return true;
                        } else {
                            console.log(" Please enter a valid email address.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Please enter the engineer's github username",
                    validate: function (value) {
                        if (value) {
                            return true;
                        } else {
                            console.log('Please provide a valid github username.');
                        }
                    }
                }  
            ]).then((response) => {
                const engineer = new Engineer(
                    response.name,
                    response.id,
                    response.email,
                    response.github
                );
                employees.push(engineer);
                console.table(employees);
                this.addEmployee();
            })
    }

    async internPrompt() {
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the intern's name.",
                    validate: nameInput => {
                        if (nameInput){
                            return true;
                        } else {
                            console.log(" Please enter a valid name.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter the intern's ID.",
                    validate: idInput => {
                        if (!isNaN(idInput) && idInput) {
                            return true;
                        } else {
                            console.log(" Please enter a valid ID number.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message:"Please enter the intern's email.",
                    validate: emailInput => {
                        if (emailInput.includes("@") && emailInput.includes(".com")) {
                            return true;
                        } else {
                            console.log(" Please enter a valid email address.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'schoolName',
                    message: "Please enter the name of the school they are attending.",
                    validate: function (value) {
                        if (value) {
                            return true;
                        } else {
                            console.log("Please enther the name of the school.");
                        }
                    }
                } 
            ]).then((response) => {
                const intern = new Intern(
                    response.name,
                    response.id,
                    response.email,
                    response.schoolName
                );
                employees.push(intern);
                console.table(employees);
                this.addEmployee();
            });
    }

    async addEmployee() {
        await inquirer  
            .prompt( {
                    type: 'list',
                    name: 'addEmployee',
                    message: "Would you like to add another employee?",
                    choices: ["Add Engineer", "Add Intern", "Finish Team"],
                    validate: (choice) => {
                        return choice ? true : (console.log("Please make a choice"), false); 
                    },
                })
            .then((response) => {
                if (response.addEmployee === "Add Engineer") {
                    this.engineerPrompt();
                }else if (response.addEmployee === "Add Intern") {
                    this.internPrompt();
                } else {
                    console.table(employees);
                    generateSite(employees);
                }
            });
    }
}

const startPrompt = new Prompter();
startPrompt.managerPrompt();


 