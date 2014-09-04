'use strict';

/**
 * @ngdoc overview
 * @name angApp
 * @description
 * # angApp
 *
 * Main module of the application.
 */
angular
  .module('angApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })
      .when('/forgotusername', {
        templateUrl: 'views/forgotusername.html',
        controller: 'MainCtrl'
      })
      .when('/forgotpassword', {
        templateUrl: 'views/forgotpassword.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
