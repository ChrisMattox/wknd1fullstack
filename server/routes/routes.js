var express = require('express');
var router = express.Router();
var pg = require('pg');
var pool = new pg.Pool({
  database: 'sigma'
});
var connectionString = 'postgres://localhost:5432/sigma';

//warehouse view
router.get('/home', function(req, res) {
  // get employees from DB
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query('SELECT * FROM employeeSalary;', function(err, result) {
      done(); // close the connection.

      if(err) {
        console.log('select query error: ', err);
        res.sendStatus(500);
      }
      res.send(result.rows);

    });
  });
});

router.post('/home', function(req, res) {
  var newEmployee = req.body;
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }
    client.query(
      'INSERT INTO employeesalary (first_name, last_name, employee_id, job_title, employee_salary) ' +
      'VALUES ($1, $2, $3, $4, $5)',
      [newEmployee.first_name, newEmployee.last_name, newEmployee.employee_id, newEmployee.job_title, newEmployee.employee_salary],
      function(err, result) {
        done();
        if(err) {
          console.log('No stuff in fields, so insert query error: ', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  });
});

//warehouse view
router.put('/home', function(req, res) {
  // get employees from DB
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query('SELECT * FROM employeeSalary;', function(err, result) {
      done(); // close the connection.

      if(err) {
        console.log('select query error: ', err);
        res.sendStatus(500);
      }
      res.send(result.rows);

    });
  });
});

//set up router.put for toggle button

module.exports = router;
