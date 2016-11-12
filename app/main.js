(function() {
  'use strict';

  angular
    .module('equilibrium', [
      'ngRoute',
      'ngAnimate'
    ])
    .config(Config);

  Config.$inject = [
    '$locationProvider',
    '$routeProvider'
  ];

  function Config(
    $locationProvider,
    $routeProvider) {


    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        name: 'home',
        templateUrl: 'views/home/home-view.html'
      })
      .when('/team', {
        name: 'team',
        templateUrl: 'views/team/team-view.html'
      })
      .when('/services', {
        name: 'services',
        templateUrl: 'views/services/services-view.html'
      })
      .when('/conditions', {
        name: 'conditions',
        templateUrl: 'views/conditions/conditions-view.html'
      });
  }

})();
