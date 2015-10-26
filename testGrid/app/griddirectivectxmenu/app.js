'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  //'ngRoute',
  'ui.grid',
  'ng-context-menu',
    'ui.grid.edit',
    'ui.grid.selection'
]);
//config(['$routeProvider', function($routeProvider) {
//  //$routeProvider.otherwise({redirectTo: '/view1'});
//}]);


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
      console.debug("gridApi ", gridApi);
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

  $scope.canCopy = function() {
    //return $scope.gridApi.grid.rows.length > 0;
    return $scope.gridApi.selection.getSelectedRows().length > 0;
  };

  $scope.onDeselect = function() {
    console.debug("Client: onDeselect");
  };

  $scope.onWatchlist = function() {
    console.debug("Client: onWatchlist");
  };

  $scope.myContextMenu = function() {
    return '<li><a class="pointer" role="menuitem" ng-show="true">Watchlist</a></li>';
  };
  $scope.myContextMenuText = '<li><a class="pointer" role="menuitem" ng-show="true">Watchlist</a></li>';

  $scope.canCopy = function() {
    return true;
  };

  $scope.canDelete = function() {
    return true;
  };

  $scope.onCopy = function() {
    console.debug("CLIENT: onCopy")
  };

  $scope.onDelete = function() {
    console.debug("CLIENT: onDelete")
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

    scope: {
      gridOptions: '=',
      onInitCallback : "&",
      clientCallbackInterface : "="
    },



    template: function(elem, attr) {

      console.debug("template args ", arguments);
      console.debug("attr.myContextMenu ", attr.myContextMenu);

      var json = attr.myContextMenuStructure;
      var menuItems = JSON.parse(json);
      //console.debug("DIRECTIVE menuItems ", menuItems);

      var clientMenuItemHtml = "";
      angular.forEach(menuItems, function(value, key) {
        //console.debug(key, ': ', value);
        clientMenuItemHtml += '<li><a class="pointer" role="menuitem"' +
                                      ' ng-show="' +  value.canShow + '"' +
                                      ' ng-click="' +  value.onCommand + '">' +
                                    value.label + '</a></li>';

      });
//      console.debug("1 clientMenuItemHtml = ", clientMenuItemHtml);
//      clientMenuItemHtml = '<li><a class="pointer" ng-click="$parent.onWatchlist()" role="menuitem" ng-show="true">Send To Map</a></li>';
//      clientMenuItemHtml = '<li><a class="pointer" role="menuitem" ng-show="true ng-click="$parent.onWatchlist()">Copy</a></li>';
//      console.debug("2 clientMenuItemHtml = ", clientMenuItemHtml);

//clientMenuItemHtml = '<li><a class="pointer" role="menuitem" ng-show="$parent.canCopy" ng-click="$parent.onCopy()">Copy</a></li><li><a class="pointer" role="menuitem" ng-show="$parent.canDelete()" ng-click="$parent.onDelete()">Delete</a></li>';

      // style='background-color:red;height:500px'
      var template =
      "<div context-menu data-target='menu-1'  ng-class=\"{ 'highlight': highlight, 'expanded' : expanded }\">" +
      "    <div ui-grid='gridOptions'  class='grid'  ui-grid-edit ui-grid-selection></div>" +
      "</div>" +
      '<div class="dropdown position-fixed" id="menu-1">' +
      '  <ul class="dropdown-menu" role="menu">' +
      '    <li>' +
      '     <a class="pointer" role="menuitem" tabindex="1" ng-show="true" ng-click="onSelect()">Select All</a>' +
      '    </li>' +
      '    <li>' +
                // onDeselect() calls the directive function.
      '      <a class="pointer" role="menuitem" tabindex="2" ng-show="true" ng-click="onDeselect()">Deselect All</a>' +
      '    </li>' +

      //attr.myContextMenu +
      clientMenuItemHtml +

      '   </ul>' +
      '</div>';

      //console.debug("template = ", template)
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

        // not good.
        //scope.gridOptions = '=';
        //scope.onInitCallback = "&";
        //scope.clientCallbackInterface = "=";

        scope.gridOptions.data[0] = {
          "name": "CoxNew",        "gender": "F",        "company": "Co1New"
        };

        // add our own customization
        scope.gridOptions.enableGridMenu = 		true;
        scope.gridOptions.onRegisterApi = function( gridApi ) {
            //$scope.gridApi = gridApi;
            console.debug("DIRECTIVE: onRegisterApi arg ", arguments);
            _gridApi = gridApi;

        };


        //scope.onWatchlist = function() {
        //  console.debug("DIRECTIVE: onWatchlist");
        //};

        scope.onDeselect = function() {
          console.debug("DIRECTIVE: onDeselect");
        };
        scope.onSelect = function() {
          console.debug("DIRECTIVE: onSelect");
        };

        //console.debug("pre link() args ", arguments);
      },
      post : function (scope, elem, attr) {
        console.debug("link post function scope  args ", arguments);
      }
    }
  };
});