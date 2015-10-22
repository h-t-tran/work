'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
      console.debug("View1Ctrl ");
      $scope.myData = [
        {
          "firstName": "Cox",
          "lastName": "Carney",
          "company": "Enormo",
          "employed": true
        },
        {
          "firstName": "Lorraine",
          "lastName": "Wise",
          "company": "Comveyer",
          "employed": false
        },
        {
          "firstName": "Nancy",
          "lastName": "Waters",
          "company": "Fuelton",
          "employed": false
        }
      ];
}]);