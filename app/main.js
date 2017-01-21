(function() {
  'use strict';

  angular
    .module('equilibriumnj', [
      'ui.router',
      'ngAnimate',
      'angulartics',
      'angulartics.google.analytics'
    ])
    .config(Config);

  Config.$inject = [
    '$locationProvider'
  ];

  function Config(
    $locationProvider) {

    $locationProvider.html5Mode(true);

  }

})();
