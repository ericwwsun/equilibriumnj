(function() {
  'use strict';

  angular
    .module('equilibriumnj')
    .config(Error404State);

  Error404State.$inject = ['$urlRouterProvider'];

  function Error404State($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

  }

})();
