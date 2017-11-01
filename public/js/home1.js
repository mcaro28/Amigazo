angular.module('app').controller('home1Control', function ($scope, StateMenu, $location) {

    try {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) $location.path('/login');
        });
    } catch (e) {
        console.error(e);
    }
    $scope.activeMenu = false;
    $scope.menu = [];
    $scope.toggleNav = function () {
        $scope.activeMenu = !$scope.activeMenu;
        $scope.menu = $scope.activeMenu ? StateMenu.getMenu() : $scope.menu;
    }
    $scope.toggleActive = function (model, _class) {
        document.getElementById(model).classList.toggle(_class);
    }

    $scope.signOut = function () {
        firebase.auth().signOut().catch(function (error) {
            console.log(error);
        });
    }
});