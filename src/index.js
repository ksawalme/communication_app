import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';

//Firebase configuration
firebase.initializeApp({
        apiKey: "AIzaSyA0CjkXYKX3FGW_HQYFcATN1_U2OF80dWM",
        authDomain: "communication-994db.firebaseapp.com",
        databaseURL: "https://communication-994db.firebaseio.com",
        projectId: "communication-994db",
        storageBucket: "communication-994db.appspot.com",
        messagingSenderId: "680453452319"
    });

ReactDOM.render(<App/>, document.getElementById('root'));
