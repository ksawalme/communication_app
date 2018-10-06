import React from 'react';
import firebase from "firebase";
import ImageGallery from "./components/gallery/ImageGallery";

import kid from "./components/images/kid.png";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";
const classNames = require("./search.css");

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
          user: null,
          images: []
        };
      }
      onInputChange(term) {
        this.props.onTermChange(term);
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
    
                {/* <img src={logo} className={classNames.appLogo} alt="logo" /> */}
    
                  <h1 className={classNames.appTitle}>
                    Makaton earch
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
                        <div className="search">
                <input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} />
            </div>
                        <div className={classNames.appIntro}>
              <ImageGallery user={this.state.user} />
            </div>
               
 
              </div>
            </div>
          </div>
        );
      }
    }
    