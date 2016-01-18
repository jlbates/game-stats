'use strict';

/**
 * @ngdoc overview
 * @name ns2StatsProjectApp
 * @description
 * # ns2StatsProjectApp
 *
 * Main module of the application.
 */
angular
  .module('ns2StatsProjectApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
