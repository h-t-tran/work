'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngTouch',
  'ui.grid',
  'ui.grid.importer',
  'ui.grid.exporter'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


myApp.controller('MainCtrl', ['$scope', function ($scope) {


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

  $scope.myData2 = [
    {
      "name": "Cox",
      "gender": "F",
      "company": "Co1"
    },
    {
      "name": "John",
      "gender": "M",
      "company": "Co2"
    },
    {
      "name": "Janme",
      "gender": "F",
      "company": "Co3"
    }
  ];

  $scope.gridOptions1 = {
    enableSorting: true,

    enableGridMenu: 		true,
    showColumnMenu: 		true,
    exporterMenuLabel :     "My Export",
    enableSelectAll: true,

    columnDefs: [
      { field: 'name', name : "TheName" },
      {
        field: 'gender', name: "M/F",

        // add to the column dropdown menu.
        menuItems: [
          {
            title: 'Outer Scope Alert',
            icon: 'ui-grid-icon-info-circled',
            action: function ($event) {
              console.debug("Inner menu clicked.")
            }
          }]
      },
      { field: 'company', enableSorting: false }
    ],
    onRegisterApi: function( gridApi ) {
      $scope.gridApi = gridApi;
    },
    importerDataAddCallback: function ( grid, newObjects ) {
      console.debug("importerDataAddCallback")
      $scope.data = $scope.data.concat( newObjects );
    },
  };

  $scope.gridOptions1.data = $scope.myData2;


  $scope.onClickHandler = function() {
    console.debug("onClickHandler $scope.gridApi ", $scope.gridApi);
    //$scope.gridApi.grid.clearAllFilters(true, true, true);
    $scope.gridApi.core.addRowHeaderColumn({ field: 'city', name : "City" });
    $scope.gridApi.core.addToGridMenu($scope.gridApi.grid,
        [ { title: 'Sel All', order: 100},
          { title: 'DeSel All', order: 101}]);
  }
}]);