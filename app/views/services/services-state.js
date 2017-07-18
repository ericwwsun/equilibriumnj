(function() {
  'use strict';

  angular
    .module('equilibriumnj')
    .config(ServicesState);

  ServicesState.$inject = ['$stateProvider'];

  function ServicesState($stateProvider) {

    $stateProvider.state('services', {
      url: '/services',
      controller: 'ServicesViewController',
      controllerAs: 'vm',
      templateUrl: 'views/services/services-view.html'
    });

  }

})();
