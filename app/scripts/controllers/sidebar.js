'use strict';

/**
 * @ngdoc function
 * @name studiojeimsonApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the studiojeimsonApp
 */
angular.module('studiojeimsonApp')
  .controller('SidebarCtrl', ['$location', function ($location) {
    this.setLoc = function(loc){
      console.log("dsfafd")
      $location.url(loc)
    }
  }]);
