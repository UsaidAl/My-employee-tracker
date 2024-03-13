// Import the mysql2 library so it can be used in the code 
const mysql = require('mysql2/promise');

// Connection pool for mysql to use to connect to DB
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Usaid.123',
    database: 'employees_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Function to view all departments
const viewDepartments = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM department');
    return rows;
};

// Function to view all roles
const viewRoles = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM role');
    return rows;
};

// Function to view all employees
const viewEmployees = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM employee');
    return rows;
};

// Function for additional departments
const additionalDepartment = async (name) => {
    const result = await connection.execute(
        'INSERT INTO department (name) VALUES (?)', [name]
    );
    return result;
};

// Function for additional roles
const additionalRole = async (title, salary, department_id) => {
    const result = await connection.execute(
        'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]
    );
    return result;
};

// Function for additional employees
const additionalEmployee = async (first_name, last_name, role_id, manager_id) => {
    const result = await connection.execute(
        'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]
    );
    return result;
};

// Function to change the role of a selected employee
const changeEmployeeRole = async (role_id, employee_id) => {
    const result = await connection.execute(
        'UPDATE employee SET role_id = ? WHERE id = ?', [role_id, employee_id]
    );
    return result;
};

// Function to change the manager of a selected employee
const changeEmployeeManager = async (employee_id, manager_id) => {
    const result = await connection.execute('UPDATE employee SET manager_id = ? where id = ?', [manager_id, employee_id]);
    return result;
};

// Function for removing departments
const removeDepartment = async (department_id) => {
    await connection.execute('UPDATE ROLE SET department_id = null where department_id = ?', [department_id]);
    const result = await connection.execute('DELETE from department where id = ? ', [department_id]);
    return result;
};

// Function for removing roles
const removeRole = async (role_id) => {
    await connection.execute('update employee set role_id = null where role_id = ?', [role_id]);
    const result = await connection.execute('DELETE from role where id = ? ', [role_id]);
    return result;
};

// Function for removing employees
const removeEmployee = async (employee_id) => {
    await connection.execute('UPDATE employee SET manager_id = null where manager_id = ?', [employee_id]);
    const result = await connection.execute('DELETE from employee where id = ? ', [employee_id]);
    return result;
};

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    additionalDepartment,
    additionalRole,
    additionalEmployee,
    changeEmployeeRole,
    changeEmployeeManager,
    removeDepartment,
    removeRole,
    removeEmployee
};