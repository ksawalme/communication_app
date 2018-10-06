// libraries
import React from "react";
import firebase from "firebase";
// components
import ImageGallery from "./components/gallery/ImageGallery";
// style
import kid from "./components/images/kid.png";
import { Link } from "react-router-dom";
import {  Button } from "react-bootstrap";

const classNames = require("./school.css");





export default class school extends React.Component {
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
          <img src={kid} className={classNames.kid} alt="kid" />

            <header className={classNames.appHeader}>


              <h1 className={classNames.appTitle}>
                Makaton school
              </h1>
            </header>
            <Link to="/homepage">
                        <Button className="btn">homepage</Button>
                    </Link>
                    <Link to="/input">
                        <Button className="btn">input</Button>
                    </Link>
                    <Link to="/search">
                        <Button className="btn">search</Button>
                    </Link>
                   
            <div className={classNames.appIntro}>
              <ImageGallery user={this.state.user} />
            </div> 
          </div>
        </div>
      </div>
    );
  }
}
