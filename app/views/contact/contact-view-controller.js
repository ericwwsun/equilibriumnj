(function() {

  'use strict';

  angular
    .module('equilibriumnj')
    .controller('ContactViewController', ContactViewController);

  ContactViewController.$inject = ['$state', 'MetaDataService'];

  /* @ngInject */
  function ContactViewController($state, MetaDataService) {
    var metaData = {
      pageDescription: "Equilibrium's Physical Therapy, Acupuncture, and Chiropractic office is conveniently located in Fort Lee, NJ serving the Tri-State area."
    };

    MetaDataService.setData(metaData);
  }

})();
