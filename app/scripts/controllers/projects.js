'use strict';

/**
 * @ngdoc function
 * @name studiojeimsonApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the studiojeimsonApp
 */
angular.module('studiojeimsonApp')
  .controller('ProjectsCtrl', ['$routeParams', function ($routeParams) {
    this.template = $routeParams.projectName;
  }]);
