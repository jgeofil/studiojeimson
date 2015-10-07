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
      transclude: true,
      link: function postLink(scope, element, attrs) {
        scope.tags = element.find("img");
      },
      controller: function ($scope) {
        $scope.current = 0;

        $scope.isCurrent = function(index){
          console.log(index + Date())
          return $scope.current === index;
        };

        $scope.setCurrent = function(index){
          $scope.current = index;
        };

      }
    };
  });
