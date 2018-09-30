import React, { Component } from "react";

import kidsImage from "../images/kidsImage.jpg";
import generalCategory from "../images/generalCategory.jpg";
import leisureCategory from "../images/leisureCategory.jpg";
import homeCategory from "../images/homeCategory.jpg";
import schoolCategory from "../images/schoolCategory.jpg";
import classNames from './Homepage.css';
class Homepage extends Component {
  render() {
    return (
      <section className={classNames.section}>
        <div className="homepage-central-image">
          <img src={kidsImage} className={classNames.kidsimage} alt="kids sitting together" />
        </div>
        <nav className="homepage-navigation-buttons">
          <div className="homepage-navigation-button">
            <img className="homepage-navigation-button-image" src={generalCategory}/>
            <div className="homepage-navigation-button-text">category 1</div>
          </div>
          <div className="homepage-navigation-button">
            <img className="homepage-navigation-button-image" src={leisureCategory}/>
            <div className="homepage-navigation-button-text">category 2</div>
          </div>
          <div className="homepage-navigation-button">
            <img className="homepage-navigation-button-image" src={homeCategory}/>
            <div className="homepage-navigation-button-text">category 3</div>
          </div>
          <div className="homepage-navigation-button">
            <img className="homepage-navigation-button-image" src={schoolCategory}/>
            <div className="homepage-navigation-button-text">category 4</div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Homepage;
