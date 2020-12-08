module.exports = (employeeHtml) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/3d592c97c3.js" crossorigin="anonymous"></script>
        <title>Our Team</title>
    </head>
    <body>
       
            <h1 class="bg-primary text-white text-center p-10">Our Team</h1>
  
        <main class="container-lg">
            <div class="container d-flex justify-content-center flex-wrap">
                <div class="row">
                    ${generateHtml(employeeHtml)}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;   
};

const generateHtml = (employees) => {
    const managerCard = (manager) => {
        return `
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-danger text-center">
                    <h2 class="card-text text-white">${manager.getName()}</h2>
                    <h5 class="card-text text-light">
                        <span><i class="fas fa-briefcase"></i></span> ${manager.getRole()}
                    </h5>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a> </li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        `
    };

    const engineerCard = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-danger text-center">
                <h2 class="card-text text-white">${engineer.getName()}</h2>
                <h5 class="card-text text-light">
                    <span><i class="fas fa-laptop"></i></span> ${engineer.getRole()}
                </h5>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> </li>
                    <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
    `
    };

    const internCard = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-danger text-center">
                <h2 class="card-text text-white">${intern.getName()}</h2>
                <h5 class="card-text text-light">
                    <span><i class="fas fa-mug-hot"></i></span> ${intern.getRole()}
                </h5>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    `
    };

    const ourTeam = [];
    ourTeam.push(employees.filter(employee => employee.getRole() === 'Manager').map(manager => managerCard(manager)).join(''));
    ourTeam.push(employees.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerCard(engineer)).join(''));
    ourTeam.push(employees.filter(employee => employee.getRole() === 'Intern').map(intern => internCard(intern)).join(''));

    return ourTeam.join('');
};