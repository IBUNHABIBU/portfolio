import React, { useState } from 'react';
import { data } from '../../constants';
import './works.scss';

function Works() {
  const [slide, setSlide] = useState(0)
  return (
    <div className="works" id="works">
      <div className="slider"
        style={{ transform: `translateX(-${slide * 100}vw)` }}
      >
        { data.map((item) => {
          const {
            id, title, icon, desc, imTag,
          } = item;
          return (

            <div className="container" key={id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={icon} alt="mobile" />
                    </div>
                    <h2>{title}</h2>
                    <p>
                      {desc}
                    </p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    src={imTag}
                    alt="websitetemplate"
                  />
                </div>
              </div>
            </div>

          );
        })}
      </div>
      <img src="arrow.png" alt="arrow left" className="arrow left" onClick={() => handleClick("left")}/>
      <img src="arrow.png" alt="arrow right" className="arrow right"onClick={() => handleClick()} />
    </div>
  );
}

export default Works;
