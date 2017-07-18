(function() {
  'use strict';

  angular
    .module('equilibriumnj')
    .config(ConditionsState);

  ConditionsState.$inject = ['$stateProvider'];

  function ConditionsState($stateProvider) {

    $stateProvider.state('conditions', {
      url: '/conditions',
      controller: 'ConditionsViewController',
      controllerAs: 'vm',
      templateUrl: 'views/conditions/conditions-view.html'
    });

  }

})();
