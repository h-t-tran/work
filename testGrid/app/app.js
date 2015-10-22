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
    exporterMenuLabel :     "MyExport",
    enableSelectAll: true,

    columnDefs: [
      { field: 'name', name : "TheName", enableSorting: true, enableCellEdit: true },
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

  $scope.uiGridImporter = "ui-grid-importer",

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

myApp.directive('myGrid', function() {
  var template1 = '<div ui-grid="gridOptions1" class="grid">';
  var template2 = '<div ui-grid="gridOptions1" ui-grid-importer ui-grid-exporter class="grid">';
  var template = template2;
  return {
    template: function(elem, attr) {
      console.debug("directive template called. args ", arguments);
      console.debug("attr ", attr);
      //if(attr.attr1 === "1") {
      //  console.debug("Creating a barebone grid template");
      //  template = template1;
      //}else {
      //  console.debug("Creating a grid with export options template");
      //  template = template2;
      //}
console.debug("attr.uiGridImporter ", attr.uiGridImporter)
      var template = '<div ui-grid="gridOptions1"  class="grid"';
      if(attr.enableUiGridImporter === "true") {
        console.debug("Creating a grid with ui-grid-importer options template");
        template  += " ui-grid-importer ";
      }
      if(attr.enableUiGridExporter === "true") {
        console.debug("Creating a grid with ui-grid-importer options template");
        template  += " ui-grid-exporter ";
      }

      template += ">";

      //template='<div ui-grid="gridOptions1"  class="grid" ui-grid-importer>';
      console.debug("  template ", template);
      return template;
    },

    //template: '<div ui-grid="gridOptions1"  ui-grid-exporter class="grid">'
    //link: function(scope, element, attrs) {
    //  console.debug(" link() args ", arguments);
    //},


    link : {
      pre: function (scope, elem, attr) {
        scope.name = 'Paul';
        scope.greeting = 'Hey, I am ';
        scope.ui_grid_importer  = "ui-grid-importer";

        console.debug("pre link() args ", arguments);
      }
    }
  };
});