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
app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";
});
