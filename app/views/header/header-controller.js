(function() {

  'use strict';

  angular
    .module('equilibrium')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$rootScope'];

  /* @ngInject */
  function HeaderController($rootScope) {
    var vm = this;

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
      vm.routeName = current.$$route.name;
    });
  }

})();
