import React, { Component } from 'react';
const Home = () => {
    const HomeImages = ['bath','brushteeth', 'spoon', 'tv', 'bread']

    return (
      <div>
        {HomeImages.map((name) => (
          <p>{name}</p>
          ))} 
         
      </div>
    )
  };
  export default Home;