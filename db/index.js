const pool = require('./connection');

const {
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
    removeEmployee,
} = require('./database');

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
    removeEmployee,
};