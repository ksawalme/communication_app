import firebase from 'firebase/app';
import 'firebase/storage';
// import ImageUpload  from './firebase/ImageUpload';



// Initialize Firebase
var config = {
  apiKey: "AIzaSyA0CjkXYKX3FGW_HQYFcATN1_U2OF80dWM",
  authDomain: "communication-994db.firebaseapp.com",
  databaseURL: "https://communication-994db.firebaseio.com",
  projectId: "communication-994db",
  storageBucket: "communication-994db.appspot.com",
  messagingSenderId: "680453452319"
  };
  firebase.initializeApp(config);
  
 const storage= firebase.storage()

  
  export {
    storage, firebase as default
  }

