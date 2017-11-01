// create the module and name it app
// also include ngRoute for all our routing needs
var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    // route for the home page
    .when('/', {
      templateUrl: 'view/login.html',
      controller: 'ctrlLogin'
    })
    .when('/login', {
      templateUrl: 'view/login.html',
      controller: 'ctrlLogin'
    })
    // route for the about page
    .when('/menu', {
      templateUrl: 'view/menu.html',
      controller: 'ctrlMenu'
    })

    .when('/home/home1', {
      templateUrl: 'view/home/home1.html',
      controller: 'home1Control'
    });
});

// create the controller and inject Angular's $scope
app.controller('mainController', function ($scope, $rootScope, StateMenu) {
  $rootScope.logged = false;
  $rootScope.menu = [];
  $rootScope.activeMenu = false;
  $rootScope.toggleNav = function () {
    $('[data-toggle="tooltip"]').tooltip({ delay: { show: 100, hide: 500 }, placement: 'right' })
    $rootScope.activeMenu = !$rootScope.activeMenu;
    $rootScope.menu = $rootScope.activeMenu ? StateMenu.getMenu() : $rootScope.menu;
  }

  $rootScope.toggleActive = function (model, _class) {
    document.getElementById(model).classList.toggle(_class);
  }

  $rootScope.signOut = function () {
    firebase.auth().signOut().then(function () {
      $rootScope.logged = false;
      $rootScope.menu = [];
    }).catch(function (error) {
      console.log(error);
    });
  }
  $rootScope.modalSession = function () {
    $('#modalSession').modal();
  }
});