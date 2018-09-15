import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';

//Firebase configuration
firebase.initializeApp({
    });

ReactDOM.render(<App/>, document.getElementById('root'));
