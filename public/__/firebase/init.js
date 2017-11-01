if (typeof firebase === 'undefined')
  throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyAoMAslbn009jgqIz-32N0i0NEdPOgghIg",
  "databaseURL": "https://amigazo-74726.firebaseio.com",
  "storageBucket": "amigazo-74726.appspot.com",
  "authDomain": "amigazo-74726.firebaseapp.com",
  "messagingSenderId": "973119316235",
  "projectId": "amigazo-74726"
});
