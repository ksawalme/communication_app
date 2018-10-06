import React from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";
// import './HomePage.css';
const classNames = require("./HomePage.css");
import kid from "./components/images/kid.png";

import general from "./components/images/general.png";
import leisure from "./components/images/leisure.jpg";
import home from "./components/images/home.jpg";
import school from "./components/images/school.jpg";

export default class HomePage extends React.Component {

  render() {
    return (
      
      <div className="app">
      <div className="content">
        <div className={classNames.app}>
        <img src={kid} className={classNames.kid} alt="kid" />

          <header className={classNames.appHeader}>

          {/* <img src={logo} className={classNames.appLogo} alt="logo" /> */}

            <h1 className={classNames.appTitle}>
              Makaton Communication WebApp
            </h1>
          </header>
         
     


        {/* <div> */}
            {/* <div className={classNames.nav}> */}

                    <Link to="/homepage">
                        <Button className="btn">homepage</Button>
                    </Link>
                    
                    <Link to="/input">
                        <Button className="btn">input</Button>
                    </Link>
                    <Link to="/search">
                        <Button className="btn">search</Button>
                    </Link>
                    {/* </div>  */}

        {/* //     </div> */}
        {/* // </div> */}

        
        </div>
        <div className={classNames.app}>

        <a href="general">
        <img src={general} className={classNames.cet} alt="general" />
       </a>

       <a href="leisure">
          <img src={leisure} className={classNames.cet} alt="leisure" />
          </a>

          <a href="home">
          <img src={home} className={classNames.cet} alt="home" />
          </a>

          <a href="school">
        <img src={school} className={classNames.cet} alt="school" />
        </a>

      </div>
    </div>
    </div>

    

    );
}
}
