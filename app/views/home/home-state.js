(function() {
  'use strict';

  angular
    .module('equilibriumnj')
    .config(HomeState);

  HomeState.$inject = ['$stateProvider'];

  function HomeState($stateProvider) {

    $stateProvider.state('home', {
      url: '/',
      controller: 'HomeViewController',
      controllerAs: 'vm',
      templateUrl: 'views/home/home-view.html'
    });

  }

})();
