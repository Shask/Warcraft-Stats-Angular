'use strict';

/**
 * @ngdoc overview
 * @name warcraftStatsApp
 * @description
 * # warcraftStatsApp
 *
 * Main module of the application.
 */
angular
  .module('warcraftStatsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js'
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
      .when('/guild', {
        templateUrl: 'views/guild-dashboard.html',
        controller: 'guildDashboardController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
