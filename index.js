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
                // Retrieve and display all departments from the database
                const departments = await database.viewDepartments();
                console.table(departments);
                break;


            case 'Show All Roles':
                // Retrieve and display all roles from the database
                const roles = await database.viewRoles();
                console.table(roles);
                break;


            case 'Show All Employees':
                // Retrieve and display all employees from the database
                const employees = await database.viewEmployees();
                console.table(employees);
                break;


            case 'Add a Department':
                // Prompt the user to enter a new department name
                const {name} = await inquirer.prompt(
                    {type: 'input', name: 'title', message: 'Enter the new Department name:'}
                );
                // Add the new department to the database
                await database.additionalDepartment(name);
                break; 


            case 'Add a Role':
                  // Prompt the user to enter a new role's name and salary
                const newRole = await inquirer.prompt([
                    {type: 'input', name: 'title', message: 'Enter the new Role name:'},
                    {type: 'input', name: 'salary', message: 'Enter the Salary for this new Role:'},
                ]);
                // Prompt the user to select a department for the new role
                const department_id = await promptDepartmentChoice();
                // Add the new role to the database
                await database.additionalRole(newRole.title, newRole.salary, department_id);
                break;


            case 'Add an Employee':
                 // Prompt the user to enter a new employee's first name and last name
                    const newEmployee = await inquirer.prompt([
                        { type: 'input', name: 'first_name', message: 'Add the first name:' },
                        { type: 'input', name: 'last_name', message: 'Add the last name:' },
                    ]);
                     // Prompt the user to select a role for the new employee
                    const employee_role_id = await promptRoleChoice();
                    // Prompt the user to select a manager for the new employee
                    const manager_id = await promptEmployeeChoice('Select Manager for new Employee:');
                    // Add the new employee to the database
                    await database.additionalEmployee(newEmployee.first_name, newEmployee.last_name, employee_role_id, manager_id);

            case 'Change an Employee Role':
                 // Prompt the user to select an employee to update
                    const employee_to_update_id = await promptEmployeeChoice('Select an Employee:');
                    // Prompt the user to select a new role for the employee
                    const new_employee_role_id = await promptRoleChoice();
                    // Update the employee's role in the database
                    await database.changeEmployeeRole(new_employee_role_id, employee_to_update_id);
                    break;

            case 'Change an Employees Manager':
                    const employee_to_update_manager_id = await promptEmployeeChoice('Select an employee:');
                    const manager_to_update_id = await promptEmployeeChoice('Select a new Manager for this employee:');
                    await database.changeEmployeeManager(employee_to_update_manager_id, manager_to_update_id);
                    break;
                    
            case 'Remove a Department':
                const department_to_delete_id = await promptDepartmentChoice();
                await database.removeDepartment(department_to_delete_id);
                break;

            case 'Remove a Role':
                const role_to_delete_id = await promptRoleChoice();
                await database.removeRole(role_to_delete_id);
                break;

            case 'Remove an Employee':
                const employee_to_delete_id = await promptEmployeeChoice('Select an employee to remove:');
                await database.removeEmployee(employee_to_delete_id);
                break;

                case 'Quit Application':
                continueExecution = false;
                break;
        }
    }

    process.exit();
};


async function promptDepartmentChoice() {
    const allDepartments = await database.viewDepartments();
    const departmentOptions = allDepartments.map((department) => ({
        name: department.name,
        value: department.id,
    }));

    const {department_id} = await inquirer.prompt({
        type: 'list',
        name: 'department_id',
        message: 'Select the department:',
        choices: departmentOptions,
    });

    return department_id;
}

async function promptRoleChoice() {
    const allRoles = await database.viewRoles();
    const roleOptions = allRoles.map((role) => ({
        name: role.title,
        value: role.id,
    }));

    const { role_id } = await inquirer.prompt({
        type: 'list',
        name: 'role_id',
        message: 'Select the role:',
        choices: roleOptions,
    });

    return role_id;
}

async function promptEmployeeChoice(message) {
    const allEmployees = await database.viewEmployees();
    const employeeOptions =
        [
            {name: 'None', value: null},
            ...allEmployees.map((employee) => ({
                name: employee.first_name + " " + employee.last_name,
                value: employee.id,
            })),
        ];

    const { employee_id } = await inquirer.prompt({
        type: 'list',
        name: 'employee_id',
        message: message,
        choices: employeeOptions,
    });

    return employee_id;
}

app();