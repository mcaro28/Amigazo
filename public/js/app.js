document.addEventListener('DOMContentLoaded', function () {
  try {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location.href = 'login.html';
      }else{
        window.location.href = 'menu.html';        
      }
    });
  } catch (e) {
    console.error(e);
  }
});