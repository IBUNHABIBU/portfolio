import React from 'react';
import { lists } from '../../constants';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

const Portfolio = () => (
  <div className="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <ul>
      {
        lists.map((list) => (<PortfolioList key={list.id} name={list.name} />))
      }
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
