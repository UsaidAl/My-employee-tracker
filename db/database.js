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


module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees
}