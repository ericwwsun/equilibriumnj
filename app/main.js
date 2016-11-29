(function() {
  'use strict';

  angular
    .module('equilibriumnj', [
      'ngRoute',
      'ngAnimate',
      'angulartics',
      'angulartics.google.analytics'
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
      })
      .when('/contact', {
        name: 'contact',
        templateUrl: 'views/contact/contact-view.html'
      })
      .otherwise('/contact', {
        redirectTo: '/'
      });

  }

})();
