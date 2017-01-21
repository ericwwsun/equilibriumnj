(function() {

  'use strict';

  angular
      .module('equilibriumnj')
      .provider('MetaDataService', MetaDataService);

  MetaDataService.$inject = [];

  /* @ngInject */

  function MetaDataService() {

    var defaults = {
      pageKeywords: 'eq,equilibriumnj,integrative medicine,david park pt,physical therapy,inhyon park,acupuncture,chiropractic,titleist performance institute tpi golf,pain,ergonomic,bergen county,fort lee, nj,linwood plaza,spinal correction,manual therapy,rehabilitation,outpatient,orthopedic,exercise',
      pageDescription: 'Equilibrium is a leading holistic clinic delivering advanced Physical Therapy, Chiropractic and Acupuncture to people in the Fort Lee, NJ and surrounding areas.'
    };

    this.setDefaults = function(newDefaults) {
      defaults = angular.extend({}, defaults, newDefaults);
    };

    this.$get = function() {

      // Return the metadata object
      return {
        data: defaults,
        setData: function(newData) {
          newData = newData || {};
          this.data = angular.extend({}, defaults, newData);
        },
        getData: function() {
          return this.data;
        }
      };
    };
  }

})();
