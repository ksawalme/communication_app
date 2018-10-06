import React, { Component } from "react";
import firebase from "firebase";


let config = {
  apiKey: "AIzaSyA0CjkXYKX3FGW_HQYFcATN1_U2OF80dWM",
  authDomain: "communication-994db.firebaseapp.com",
  databaseURL: "https://communication-994db.firebaseio.com",
  projectId: "communication-994db",
  storageBucket: "communication-994db.appspot.com",
  messagingSenderId: "680453452319"
};

firebase.initializeApp(config);

class Authen extends Component {
 
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      err: "",
      isLoggedIn: false
  
    };
  }
  login() {
    const email = this.state.email;
    const password = this.state.password;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.then(user => {
      let message = "Welcome, you are now logged in!";
      this.setState({ err: message, isLoggedIn: true });
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.props.onLogin({
            username: "this.state.email",
            password: "this.state.password"
          });
        }
      });
    });

    promise.catch(e => {
      let err = e.message;
      this.setState({ err });
    });
  };

  signup(){
    const email = this.state.email;
    const password = this.state.password;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
      .then(user => {
        let err = `Welcome ${user.email}`;
        firebase
          .database()
          .ref(`users/${user.uid}`)
          .set({
            email: user.email
          });
        this.setState({ err });
      })
      .catch(e => {
        let err = e.message;
        this.setState({ err });
      });
  };

  logout(){
    let promise = firebase.auth().signOut();
    promise
      .then(() => {
        let message = "You are now logged out!";
        this.setState({ err: message, isLoggedIn: false });
      })
      .catch(err => {
        this.setState({ err: err.message });
      });
  };

  render() {
    return (
      <div className="container backg">
        <div className="row">
          <div className="Absolute-Center is-Responsive">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <form action="">
                <div className="form-group input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    className="form-control"
                    name="username"
                    id="email"
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-lock" />
                  </span>
                  <input
                    className="form-control"
                    name="password"
                    id="pass"
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-group">
                  <p>{this.state.err}</p>
                  <button
                    type="button"
                    className="btn btn-def btn-block btn-dark login"
                    onClick={this.login}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-def btn-block btn-dark signup"
                    onClick={this.signup}
                  >
                    signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Authen;
