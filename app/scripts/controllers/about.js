'use strict';

/**
 * @ngdoc function
 * @name bowlingjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bowlingjsApp
 */
angular.module('bowlingjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
