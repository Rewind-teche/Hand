import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyAip9bLuLLj1xApHbRMN5f2b48K6Yvphw0",
    authDomain: "handymen-app.firebaseapp.com",
    projectId: "handymen-app",
    storageBucket: "handymen-app.appspot.com",
    messagingSenderId: "1071749732913",
    appId: "1:1071749732913:web:b22f4b9b9bc22776691310"
  };
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
