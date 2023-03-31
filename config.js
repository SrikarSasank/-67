import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyCbT0Q5wenhxg7lMjnRve_a3SyzFlshyMk",
  authDomain: "team-voting-app-ec77c.firebaseapp.com",
  databaseURL: "https://team-voting-app-ec77c-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-ec77c",
  storageBucket: "team-voting-app-ec77c.appspot.com",
  messagingSenderId: "425467824448",
  appId: "1:425467824448:web:7c884ca671c034699a52a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();