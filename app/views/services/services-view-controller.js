(function() {

  'use strict';

  angular
    .module('equilibriumnj')
    .controller('ServicesViewController', ServicesViewController);

  ServicesViewController.$inject = ['$state', 'MetaDataService'];

  /* @ngInject */
  function ServicesViewController($state, MetaDataService) {
    var metaData = {
      pageDescription: 'Advanced Physical Therapy, Acupuncture, and Chiropractic services with a heavy emphasis on manual therapy are offered at Equilibrium LLC.'
    };

    MetaDataService.setData(metaData);
  }

})();

