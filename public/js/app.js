document.addEventListener('DOMContentLoaded', function () {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });*
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    firebase.database().ref('/App/Users/').on('value', snapshot => {
      var data = [];
      var headers = [];
      var head;
      snapshot.forEach((child) => {
        console.log(child.val(), child.key);
        data.push(child.val());
        head = child.val();
      });
      for (keys in Object.keys(head)) {
        headers.push({ name: Object.keys(head)[keys] });
      }    
      mGrid.create({
        container: 'container',
        headers: headers,
        data: data
      });

    });

    document.getElementById('buttonSave').addEventListener('click', function () {
      var item = {
        "Firstname": document.getElementById('Firstname').value,
        "Lastname": document.getElementById('Lastname').value,
        "Savings": document.getElementById('Savings').value,
      };
      save(item);
    })
  } catch (e) {
    console.error(e);
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
});

function save(item) {
  firebase.database().ref('/App/Users/').push(item);
}

function openModal() {
  var myModal = new Modal({
    className: 'custom-animation',
    content: '<p>Ken Wheeler is strikingly handsome.</p>',
    maxWidth: 400,
    closeButton: true
  });

  myModal.open();
}