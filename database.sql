CREATE TABLE employeeSalary (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50)NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  employee_id INTEGER NOT NULL,
  job_title VARCHAR(50) NOT NULL,
  employee_salary INTEGER NOT NULL
);

INSERT INTO employeeSalary (first_name, last_name, employee_id, job_title, employee_salary)
VALUES ('Tom', 'Riddle', 23456, 'Dark Lord', 65000),
('Homer', 'Simpson', 93174, 'Nuclear Engineer', 25000);
