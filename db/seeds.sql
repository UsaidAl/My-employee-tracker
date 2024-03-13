INSERT INTO department (id, name)
VALUES (1, "Retail"),
       (2, "Accounting"),
       (3, "Healthcare"),
       (4, "Software");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Customer Assistant", 18000, 1),
       (2, "Customer Service Manager", 26000, 1),
       (3, "Accounts Payable", 23000, 2),
       (4, "Accounts Team leader", 30000, 2),
       (5, "Health Care Assistant", 20000, 3),
       (6, "Care Team Leader", 27000, 3),
       (7, "Senior Developer", 50000, 4),
       (8, "Lead Developer", 75000, 4);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Steve", "Jobs", 1, 2),
       (2, "Bill", "Gates", 2, NULL),
       (3, "Michael", "Mcintrye", 3, 5),
       (4, "Jon", "Jones", 3, 5),
       (5, "Steve", "Harvey", 4, NULL),
       (6, "Bernie", "Mac", 5, 7),
       (7, "Edward", "Apostal", 6, NULL),
       (8, "Mason", "Woods", 7, 10),
       (9, "Viktor", "Reznov", 7, 10),
       (10, "Usaid", "Ali", 8, NULL),
       (11, "Vin", "Diesel", 8, NULL);