//route in angular app
var app = angular.module('salaryApp', ['ngRoute']);
//setting the route to hit home
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]); //close app.config

//setting controller for home app
app.controller('HomeController', ["$http", function($http) {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";
  self.employees = [];
  self.newEmployee = {};

  getEmployees();
  function getEmployees() {
    $http.get('routes/home')
    .then(function(response){
      self.employees = response.data;
      console.log("employee data: ", self.employees);
      //empty variable to hold total salary
      var totalSalary = 0;
      //loops thru the employeeArray and adds salary to total salary
      for(var i = 0; i < self.employees.length; i++) {
        totalSalary += Number(self.employees[i].employee_salary);
      }
      //set the monthly salary for angular proper
      self.monthlySalary = Math.round(totalSalary/12);

    });
  }

    self.postEmployee = function(){
    console.log("its clicking");
    $http.post('routes/home', self.newEmployee)
    .then(function(response){
      console.log("Send from post employee", self.newEmployee);
      self.newEmployee = {};
      getEmployees();
    });
  }
}]);
