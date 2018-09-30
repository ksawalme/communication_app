import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Jumbotron, Button } from "react-bootstrap";

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <div className="welcomebg">
                        <h1>Welcome to my Music Land</h1>
                        <p>Cominication App
              <br />welcome Cominication App
            </p>
                        {/* <Link to="/search">
                            <Button className="btn btn-lg btn-secondary">Go to Search</Button>
                        </Link> */}
                </div>
            </div>
        );
    }
}
