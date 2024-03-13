// Import the mysql2 library so it can be used in the code 
const mysql = require('mysql2');

// Connection pool for mysql to use to connect to DB
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
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


module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    additionalDepartment,
    additionalRole,
    additionalEmployee,
    changeEmployeeRole
}