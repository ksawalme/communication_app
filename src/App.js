import React, { Component } from 'react';
// import Logo2 from './Logo2.jpg';
// import './App.css';
// import Home from './components/Home';
// import School from './components/School';
// import Leisure from './components/Leisure';
// import General from './components/General';

class App extends Component {
  render() {

    
    return (
     <div className="App">
     {/* <p>App</p> */}
      {/* <Home/>
      <School/>
      <Leisure/>
      <General/> */}
      <ImageUpload/>
        {/* <header className="App-header">
          <img src={Logo2} className="App-logo" alt="logo" />
          <h1 className="App-title">Makaton Communication App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}



export default App;
