(function() {

  'use strict';

  angular
    .module('equilibriumnj')
    .controller('TeamViewController', TeamViewController);

  TeamViewController.$inject = ['$state', 'MetaDataService'];

  /* @ngInject */
  function TeamViewController($state, MetaDataService) {

    var metaData = {
      pageDescription: 'Dr. John Inhyon Park DC, LAc has over 25 years of experience in physical medicine and functional restoration through his ongoing passion for patient care and professional development. Dr. David Park PT earned his Doctorate in Physical Therapy from Hunter College and has adhered to the Functional Manual Therapy approach through the Institute of Physical Art.'
    };

    MetaDataService.setData(metaData);
  }

})();
