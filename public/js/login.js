
document.addEventListener('DOMContentLoaded', function () {
    try {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                window.location.href = 'menu.html';
            }
        });
    } catch (e) {
        console.error(e);
    }    
    document.querySelector('#loginG').addEventListener('click', loginPopup);
    document.querySelector('#loginEP').addEventListener('click', loginEP);
    document.querySelector('#psw').addEventListener('keyup', function () {
        resetLoad('')
    });
    document.querySelector('#uname').addEventListener('keyup', function () {
        resetLoad('')
    });
});

function resetLoad(textLoad) {
    document.querySelector('#load').innerHTML = textLoad;
}
function loginEP() {
    var email = document.querySelector('#uname').value;
    var psw = document.querySelector('#psw').value;
    firebase.auth().signInWithEmailAndPassword(email, psw).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        resetLoad(errorMessage);
    });
}

function loginPopup() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
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
}
