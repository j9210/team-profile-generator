const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, git) {
        super(name, id, email);

        this.git = git;
    }
}
//properties:
    //github  GitHub username
//methods:
    //getGithub()
    //getRole()  overridden to return 'Engineer'
module.exports = Engineer;