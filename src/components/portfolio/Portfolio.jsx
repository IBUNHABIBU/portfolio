import React, { useEffect, useState } from 'react';
import {
  lists, featured, rails, react, html, javasript,
} from '../../constants';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featured);
        break;

      case 'Rails':
        setData(rails);
        break;

      case 'React':
        setData(react);
        break;

      case 'Javascript':
        setData(javasript);
        break;

      case 'HTML & CSS':
        setData(html);
        break;

      default:
        setData(featured);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {
        lists.map((list) => {
          const { name, id } = list;
          return (
            <PortfolioList
              key={id}
              name={name}
              active={selected === id}
              setSelected={setSelected}
              id={id}
            />
          );
        })
      }
      </ul>

      <div className="container">
        {
          data.map((element) => {
            const {
              id, title, img, github, live,
            } = element;
            return (
              <div className="item" key={id}>
                <img src={img} alt={id} />
                <div className="project">
                  <h3>{title}</h3>
                  <a href={github} className="github">Github</a>
                  <a href={live} className="live">live Demo</a>
                </div>
              </div>
            );
          })
        }

      </div>
    </div>
  );
};

export default Portfolio;
