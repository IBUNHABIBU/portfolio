import React from 'react';
import './portfolio.scss';

const Portfolio = () => (
  <div className="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <ul>
      <li className="active">Featured</li>
      <li>Ruby on rails</li>
      <li>React</li>
      <li>Javascript</li>
      <li>HTML & CSS</li>
    </ul>
    
    <div className="container">
      <div className="item">
        <img src="carRental.png" alt="car rental" />
        <h3>Car rental App</h3>
      </div>
      <div className="item">
        <img src="carRental.png" alt="car rental" />
        <h3>Car rental App</h3>
      </div>
      <div className="item">
        <img src="carRental.png" alt="car rental" />
        <h3>Car rental App</h3>
      </div>
      <div className="item">
        <img src="carRental.png" alt="car rental" />
        <h3>Car rental App</h3>
      </div>
      <div className="item">
        <img src="carRental.png" alt="car rental" />
        <h3>Car rental App</h3>
      </div>
      <div className="item">
        <img src="carRental.png" alt="car rental" />
        <h3>Car rental App</h3>
      </div>
    </div>
  </div>
);

export default Portfolio;
