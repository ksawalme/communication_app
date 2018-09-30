import firebase from 'firebase/app';
import 'firebase/storage';
// import ImageUpload  from './firebase/ImageUpload';



// Initialize Firebase
var config = {
    apiKey: "AIzaSyDgdp6tYpq1etxFCnpIetbUO5YZ6dntUEo",
    authDomain: "makatonapp.firebaseapp.com",
    databaseURL: "https://makatonapp.firebaseio.com",
    projectId: "makatonapp",
    storageBucket: "makatonapp.appspot.com",
    messagingSenderId: "137161735861"
  };
  firebase.initializeApp(config);
  
 const storage= firebase.storage()

  
  export {
    storage, firebase as default
  }

