import firebase from 'firebase/app';
import 'firebase/auth';

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBAIeq6qpiKM0PSP_J0sdrc3KAiQoJ3fvc",
    authDomain: "coaches-708db.firebaseapp.com",
    projectId: "coaches-708db",
    storageBucket: "coaches-708db.appspot.com",
    messagingSenderId: "430173944778",
    appId: "1:430173944778:web:3f135043ce3b563bd82d33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  //Utils
  const auth = firebase.auth();

  //Exports
  export {auth};