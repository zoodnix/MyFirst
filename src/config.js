import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCdEnjkdVmJKR7Mn0oXVGgilJr0CLYQSqU",
    authDomain: "brngover-web.firebaseapp.com",
    databaseURL: "https://brngover-web-default-rtdb.firebaseio.com",
    projectId: "brngover-web",
    storageBucket: "brngover-web.appspot.com",
    messagingSenderId: "839075158593",
    appId: "1:839075158593:web:bf80e3ec66dfc417d8c4c0",
    measurementId: "G-XRXBK1320E"
  };
 
const app = Firebase.initializeApp(firebaseConfig);

export const db = app.database();