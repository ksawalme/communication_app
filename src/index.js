import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from "firebase";
// import AdminLogin from "./components/authentication/AdminLogin";
import registerServiceWorker from './registerServiceWorker';

import App from "./App";

// Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyA0CjkXYKX3FGW_HQYFcATN1_U2OF80dWM",
  authDomain: "communication-994db.firebaseapp.com",
  databaseURL: "https://communication-994db.firebaseio.com",
  projectId: "communication-994db",
  storageBucket: "communication-994db.appspot.com",
  messagingSenderId: "680453452319"
});

ReactDOM.render(
  <Router>
      <App />
  </Router>, document.getElementById('root'));
registerServiceWorker();