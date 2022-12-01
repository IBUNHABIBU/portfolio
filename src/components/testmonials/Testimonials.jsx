import React from 'react';
import './testimonials.scss';

const Testimonials = () => (
  <div className="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <div className="container">
      <div className="card">
        <div className="top">
          <img src="assets/right-arrow.png" alt="" className="left" />
          <img src="assets/person/1.jpeg" alt="" className="user" />
          <img src="assets/youtube.png" alt="" className="right" />
        </div>
        <div className="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus voluptas quos accusantium quas. Quisquam, quae
          voluptates. Quisquam, quae voluptates.
        </div>
        <div className="bottom">
          <h3>John Doe</h3>
          <h4>Software Engineer</h4>
        </div>
      </div>
    </div>

  </div>
);

export default Testimonials;
