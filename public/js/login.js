
angular.module('app').controller('ctrlLogin', function ($scope, $rootScope) {
    // create a message to display in our view
    $rootScope.logged = false;
    $rootScope.activeMenu = false;
    try {
        firebase.auth().onAuthStateChanged(user => {
            if (user) window.location.href = '#/menu';
        });
    } catch (e) {
        console.error(e);
    }
    $scope.load = '';
    $scope.alert = false;
    $scope.loginPopup = function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };

    $scope.loginEP = function () {

        try {

            firebase.auth().signInWithEmailAndPassword($scope.uname, $scope.psw).then(function (u) {

            }).catch(function (error) {
                // Handle Errors here.            
                $scope.alert = true;
                var errorCode = error.code;
                $scope.load = error.message || $scope.load;
                console.log(error);
            });
        } catch (e) {
            $scope.alert = true;
            $scope.load = e.message || $scope.load;
            console.log(e);
        }
    }
});