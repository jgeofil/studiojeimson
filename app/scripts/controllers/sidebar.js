'use strict';

/**
 * @ngdoc function
 * @name studiojeimsonApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the studiojeimsonApp
 */
angular.module('studiojeimsonApp')
  .controller('SidebarCtrl', ['$location', '$rootScope', function ($location, $rootScope) {
    this.setLoc = function(loc){
      $location.url(loc);
    };

    this.projects = $rootScope.projects;
    this.news = $rootScope.news;

  }]);
