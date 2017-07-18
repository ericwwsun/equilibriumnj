(function() {

  'use strict';

  angular
    .module('equilibriumnj')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['MetaDataService'];

  /* @ngInject */
  function ApplicationController(MetaDataService) {
    var vm = this;

    vm.metaData = metaData;

    function metaData() {
      return MetaDataService.getData();
    }

  }

})();
