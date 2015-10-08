'use strict';

/**
 * @ngdoc function
 * @name studiojeimsonApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the studiojeimsonApp
 */
angular.module('studiojeimsonApp')
  .controller('SidebarCtrl', ['$location', '$rootScope', '$routeParams', '$http', function ($location, $rootScope, $routeParams, $http) {
    this.setLoc = function(loc){
      $location.url(loc);
    };

    this.getClass = function (path, isNew) {
      if ($location.path().substr(0, path.length) === path) {
        if(isNew) {return 'active shiny-news';}
        else {return 'active';}
      } else {
        if(isNew) {return 'shiny-news';}
        else {return '';}
      }
    };

    var side = this;

    $http.get('projects/projects.json')
      .success(function(data) {
          //$rootScope.projects=data;
          side.projects = data;
      })
      .error(function(){
          //$rootScope.projects=[];
      });
    $http.get('news/news.json')
      .success(function(data) {
          //$rootScope.news=data;
          side.news = data;
      })
      .error(function(){
          //$rootScope.news=[];
      });

    //this.projects = $rootScope.projects;
    //this.news = $rootScope.news;
    this.params = $routeParams;

  }]);
