import React from 'react';
import './intro.scss';

const Intro = () => (
  <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="/profile-removebg-preview.png" alt="Vite logo" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi there I am </h2>
        <h1>Salum Habibu</h1>
        <h3>
          I am a software developer
          <span>Electrical</span>
        </h3>
      </div>
      <a href="#portfolio">
        <img src="/down.png" alt="down arrow" />
      </a>
    </div>
  </div>
);

export default Intro;
