angular.module('app').controller('ctrlMenu', function ($scope, $rootScope, StateMenu) {

    $rootScope.logged = true;
    $rootScope.activeMenu = false;
    StateMenu.setMenu(null);    
    try {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) window.location.href = '#/login';
        });
    } catch (e) {
        console.error(e);
    }
});