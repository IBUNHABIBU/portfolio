import React from 'react';
import { testimonialData } from '../../constants';
import './testimonials.scss';

const Testimonials = () => (
  <div className="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <div className="container">
      {
        testimonialData.map((data) => {
          const { id, name, title, img, icon, desc } = data;
          return(
      <div className="card">
        <div className="top">
          <img src="assets/right-arrow.png" alt="" className="left" />
          <img src={img} alt="" className="user" />
          <img src={icon} alt="" className="right" />
        </div>
        <div className="center">
          {desc}
        </div>
        <div className="bottom">
          <h3>{name}</h3>
          <h4>{title}</h4>
        </div>
      </div>
         )
        })
      }
    </div>

  </div>
);

export default Testimonials;
