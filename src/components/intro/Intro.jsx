import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './intro.scss';

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Electrical', 'Software Developer'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="/profile-removebg-preview.png" alt="Vite logo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there I'm </h2>
          <h1>Salum Habibu</h1>
          <h3>
            <span>a Sofware Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
