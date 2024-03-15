USE employees_db;

INSERT INTO department (name)
VALUES 
        ("Retail"),
        ("Accounting"),
        ("Healthcare"),
        ("Software");

INSERT INTO role (title, salary, department_id)
VALUES 
        ("Customer Assistant", 18000, 1),
        ("Customer Service Manager", 26000, 1),
        ("Accounts Payable", 23000, 2),
        ("Accounts Team leader", 30000, 2),
        ("Health Care Assistant", 20000, 3),
        ("Care Team Leader", 27000, 3),
        ("Senior Developer", 50000, 4),
        ("Lead Developer", 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
        ("Steve", "Jobs", 1, 2),
        ("Bill", "Gates", 2, NULL),
        ("Michael", "Mcintrye", 3, 5),
        ("Jon", "Jones", 3, 5),
        ("Steve", "Harvey", 4, NULL),
        ("Bernie", "Mac", 5, 7),
        ("Edward", "Apostal", 6, NULL),
        ("Mason", "Woods", 7, 10),
        ("Viktor", "Reznov", 7, 10),
        ("Usaid", "Ali", 8, NULL),
        ("Vin", "Diesel", 8, NULL);