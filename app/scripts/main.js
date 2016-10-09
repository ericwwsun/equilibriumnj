(function() {
  'use strict';

  angular
    .module('equilibrium', [])
    .config(Config);

  Config.$inject = ['$locationProvider'];

  function Config($locationProvider) {
    $locationProvider.html5Mode(true);
  }

})();
