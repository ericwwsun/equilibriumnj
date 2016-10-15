(function() {
  'use strict';

  angular
    .module('equilibrium', [
      'ngRoute'
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
        pageType: 'home',
        templateUrl: 'views/home/home-view.html'
      })
      .when('/team', {
        pageType: 'team',
        templateUrl: 'views/team/team-view.html'
      });
  }

})();
