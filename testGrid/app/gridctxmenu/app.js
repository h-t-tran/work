'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ui.grid',
  'ng-context-menu',
    'ui.grid.edit'
]).
config(['$routeProvider', function($routeProvider) {
  //$routeProvider.otherwise({redirectTo: '/view1'});
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
        field: 'gender', name: "M/F", editableCellTemplate: 'ui-grid/dropdownEditor',

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
    data: [
      {
        "name": "Cox",        "gender": "F",        "company": "Co1"
      },
      {
        "name": "John",        "gender": "M",        "company": "Co2"
      },
      {
        "name": "Janme",        "gender": "F",        "company": "Co3"
      }
    ],

    //importerDataAddCallback: function ( grid, newObjects ) {
    //  console.debug("importerDataAddCallback")
    //  $scope.data = $scope.data.concat( newObjects );
    //},
  };


  $scope.gridOptions1.data = $scope.myData2;


  $scope.onClickHandler = function() {
    console.debug("onClickHandler $scope.gridApi ", $scope.gridApi);
    //$scope.gridApi.grid.clearAllFilters(true, true, true);
    $scope.gridApi.core.addRowHeaderColumn({ field: 'city', name : "City" });
    $scope.gridApi.core.addToGridMenu($scope.gridApi.grid,
        [ { title: 'Sel All', order: 100},
          { title: 'DeSel All', order: 101}]);
  };

  $scope.onGridInitialized = function(ufsUnfiedGrid, gridApi, grid) {
    console.debug("CLIENT: onGridInitialized arg = ", arguments)
  };

  $scope.clientCallbackInterfaceObject = {
     onInitDone: function(gridApi, IMyGridInterface) {
        console.debug("CLIENT: onInitDone args ", arguments);

       // call directive API
       IMyGridInterface.moveToRow(5);
     }
  };

  console.debug("Outter $scope ", $scope);
}]);

/////////////////////////////////////////////////////////
//
myApp.directive('myGrid', function() {

  var _option = {
    gridOptions : "="
  };

  var _gridApi;
  var self = this;

  var scopeOptions = {
    gridOptions: '=',
    onInitCallback : "&",
    clientCallbackInterface : "="
  };

  var IMyGridInterface = {
      moveToRow: function(row) {
        console.debug("DIRECTIVE: moveToRow ", arguments);
      }
  };

  return {
    restrict: 'EA',

    //scope: false,  // just use parent  scope
    //scope: true,  // inherit parent scope
    // scope: {},   // isolated scope

    scope: scopeOptions,



    template: function(elem, attr) {
      console.debug("directive template called. args ", arguments);
      console.debug("attr ", attr);

      console.debug("attr.uiGridImporter ", attr.uiGridImporter)

      var template = '<div ui-grid="gridOptions"  class="grid"';

      if(attr.enableUiGridImporter === "true") {
        //console.debug("Creating a grid with ui-grid-importer options template");
        template  += " ui-grid-importer ";
      }
      if(attr.enableUiGridExporter === "true") {
        //console.debug("Creating a grid with ui-grid-importer options template");
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

        scope.gridOptions.data[0] = {
          "name": "CoxNew",        "gender": "F",        "company": "Co1New"
        };

        // add our own customization
        scope.gridOptions.enableGridMenu = 		true;
        scope.gridOptions.onRegisterApi = function( gridApi ) {
            //$scope.gridApi = gridApi;
            console.debug("DIRECTIVE: onRegisterApi arg ", arguments);
            _gridApi = gridApi;

            scope.clientCallbackInterface.onInitDone(gridApi, IMyGridInterface);
            scope.onInitCallback({
              // these properties must match those in the markup.
              //  on-init-callback="onGridInitialized(ufsUnfiedGrid, gridApi, grid)"
              ufsUnfiedGrid: IMyGridInterface,
              gridApi: gridApi,
              grid: gridApi.grid
            })
        };

        console.debug("pre link() args ", arguments);
      },
      post : function (scope, elem, attr) {
        console.debug("link post function scope  ", scope, ", _gridApi = ", _gridApi);
        //scope.onInitCallback(self);
        //
        //setTimeout(function() {
        ////  scope.clientCallbackInterface.onInitDone(_gridApi);
        //}, 2000);
      }
    }
  };
});