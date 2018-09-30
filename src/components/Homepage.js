import React, { Component } from "react";

class Homepage extends Component {
  render() {
    return (<section class="homepage">
      <h1 class="homepage-title">Makaton Communication WebApp</h1>
      <div class="homepage-central-image">
        <img src="TODO" />
      </div>
      <nav class="homepage-navigation-buttons">
        <div class="homepage-navigation-button">
          <img class="homepage-navigation-button-image" src="TODO" />
          <div class="homepage-navigation-button-text">category 1</div>
        </div>
        <div class="homepage-navigation-button">
          <img class="homepage-navigation-button-image" src="TODO" />
          <div class="homepage-navigation-button-text">category 2</div>
        </div>
        <div class="homepage-navigation-button">
          <img class="homepage-navigation-button-image" src="TODO" />
          <div class="homepage-navigation-button-text">category 3</div>
        </div>
        <div class="homepage-navigation-button">
          <img class="homepage-navigation-button-image" src="TODO" />
          <div class="homepage-navigation-button-text">category 4</div>
        </div>
      </nav>
    </section>);
  }
}

export default Homepage