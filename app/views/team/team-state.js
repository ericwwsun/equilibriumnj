(function() {
  'use strict';

  angular
    .module('equilibriumnj')
    .config(TeamState);

  TeamState.$inject = ['$stateProvider'];

  function TeamState($stateProvider) {

    $stateProvider.state('team', {
      url: '/team',
      controller: 'TeamViewController',
      controllerAs: 'vm',
      templateUrl: 'views/team/team-view.html'
    });

  }

})();
