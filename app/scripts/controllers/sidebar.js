'use strict';

/**
 * @ngdoc function
 * @name studiojeimsonApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the studiojeimsonApp
 */
angular.module('studiojeimsonApp')
  .controller('SidebarCtrl', ['$location', '$rootScope', '$routeParams', function ($location, $rootScope, $routeParams) {
    this.setLoc = function(loc){
      $location.url(loc);
    };

    this.getClass = function (path) {
      if ($location.path().substr(0, path.length) === path) {
        return 'active';
      } else {
        return '';
      }
    };

    this.projects = $rootScope.projects;
    this.news = $rootScope.news;
    this.params = $routeParams;

  }]);
