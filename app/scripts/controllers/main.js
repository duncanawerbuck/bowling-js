'use strict';

/**
 * @ngdoc function
 * @name bowlingjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bowlingjsApp
 */
angular.module('bowlingjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
