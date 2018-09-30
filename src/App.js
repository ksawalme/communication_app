// libraries
import React from "react";
import firebase from "firebase";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// components
import ImageGallery from "./components/gallery/ImageGallery";
import Homepage from "./components/homepage/Homepage";

// style
import logo from "./components/images/appLogo.jpg";
const classNames = require("./App.css");

const SwitchComponent = props => (
  <Switch>
    <Route exact path="/" component={ImageGallery} />
    <Route path="/search" component={SearchPage} />
  </Switch>
);

const SearchBar = props => (
  <div>
    <input type="search" placeholder="Search image" />
    <button onClick={this.handleClick}>Go</button>
  </div>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      images: []
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <div className="app">
        <div className="content">
          <div className={classNames.app}>
            <header className={classNames.appHeader}>
              <img src={logo} className={classNames.appLogo} alt="logo" />
              <h1 className={classNames.appTitle}>
                Makaton Communication WebApp
              </h1>
            </header>
            <Homepage />
            {/* <SearchBar />
            <div className={classNames.appIntro}>
              <ImageGallery user={this.state.user} />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
