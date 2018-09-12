
import 'firebase/storage';
import ImageUpload  from './ImageUpload';



// Initialize Firebase
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "makatonapp.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);
  
 const storage= firebase.storage()

  
  export {
    storage, firebase as default
  }

