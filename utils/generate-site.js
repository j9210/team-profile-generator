const fs = require('fs');
const employeeHtml = require('../src/page-template');

const generateSite = (employees) => {
    const fileContent = employeeHtml(employees)
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return
            }
            resolve ({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

module.exports = generateSite;