'use strict';

/**
 * @ngdoc directive
 * @name studiojeimsonApp.directive:jeimsonGallery
 * @description
 * # jeimsonGallery
 */
angular.module('studiojeimsonApp')
  .directive('jeimsonGallery', function () {
    return {
      templateUrl: '../scripts/directives/jeimson-gallery.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the jeimsonGallery directive');
      }
    };
  });
