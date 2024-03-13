const inquirer = require('inquirer');
const database = require('./db/database')


async function app() {
    let continueExecution = true;

    while (continueExecution) {
        const {action} = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'How can we help?',
            choices: [
                'Show All Departments',
                'Show All Roles',
                'Show All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Change an Employee Role',
                'Change an Employees Manager',
                'Remove a Department',
                'Remove a Role',
                'Remove an Employee',
                'Quit Application'
            ],
        });
    }
};