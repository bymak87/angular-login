// Code goes here

//module named angApp

  var angApp = angular.module('angApp',['ngRoute', 'ngAnimate']);

  //routes
  angApp.config(function($routeProvider){
    $routeProvider
    //homepage
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      //page for registering
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'MainCtrl'
      })
      //page for login
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })
      //page for retrieving username
      .when('/forgotusername', {
        templateUrl: 'views/forgotusername.html',
        controller: 'MainCtrl'
      })
      //page for retrieving password
      .when('/forgotpassword', {
        templateUrl: 'views/forgotpassword.html',
        controller: 'MainCtrl'
      })
      //defaults to homepage
      .otherwise({
        redirectTo: '/'
      });
});
//controller to inject $scope
angApp.controller('MainCtrl', function($scope){
});
