import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ImageUpload  from './firebase/ImageUpload';


ReactDOM.render(<ImageUpload />, document.getElementById('root'));
registerServiceWorker();

 