# My-employee-tracker (MySql)


## Description

The challenge involves developing a command-line employee management application using Node.js and MySQL. Users interact with the application to perform tasks such as viewing departments, roles, and employees, adding new departments, roles, and employees, changing employee roles, managers, and removing departments, roles, and employees. The challenge includes implementing database operations, user prompts, and error handling to create a functional and interactive employee tracking system.

## Installation

In the terminal, you have to first type the command 'npm i'. This command installs the required packages mentioned in the 'package.json' file. This will install packages like 'inquirer' and 'mysql2' that are used for user interaction and MySQL database connectivity. 
You need to create the MySQL database and tables by running the provided SQL schema and seed files. Navigate to your project directory and use the following commands:
- mysql -u <your_username> -p < schema.sql
- mysql -u <your_username> -p < seeds.sql

Once you have these prerequisites in place, you should be able to run the employee tracker application using the 'npm run start' command.

## Screenshots

#### When you run the application via 'npm run start', this will appear:

![screenshot](/screenshots/App%20start.png)

#### When show all departments is selected:

![screenshot](/screenshots/Show%20Departments.png)

##### When Show all roles is selected:

![screenshot](/screenshots/Show%20Roles.png)

#### When show all employees is selected:

![screenshot](/screenshots/Show%20employees.png)



