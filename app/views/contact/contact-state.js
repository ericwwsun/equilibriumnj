(function() {
  'use strict';

  angular
    .module('equilibriumnj')
    .config(ContactState);

  ContactState.$inject = ['$stateProvider'];

  function ContactState($stateProvider) {

    $stateProvider.state('contact', {
      url: '/contact',
      controller: 'ContactViewController',
      controllerAs: 'vm',
      templateUrl: 'views/contact/contact-view.html'
    });

  }

})();
