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
        switch (action) {
            case 'Show All Departments':
                const departments = await database.viewDepartments();
                console.table(departments);
                break;
            case 'Show All Roles':
                const roles = await database.viewRoles();
                console.table(roles);
                break;
            case 'Show All Employees':
                const employees = await database.viewEmployees();
                console.table(employees);
                break;
            case 'Add a Department':
                const {name} = await inquirer.prompt(
                    {type: 'input', name: 'title', message: 'Enter the new Department name:'}
                );
                await database.additionalDepartment(name);
                break; 
            case 'Add a Role':
                const newRole = await inquirer.prompt([
                    {type: 'input', name: 'title', message: 'Enter the new Role name:'},
                    {type: 'input', name: 'salary', message: 'Enter the Salary for this new Role:'},
                ]);
                const department_id = await promptDepartmentChoice();
                await database.additionalRole(newRole.title, newRole.salary, department_id);
                break;              
        }
    }
};