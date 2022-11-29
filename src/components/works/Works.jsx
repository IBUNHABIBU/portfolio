import React from 'react';
import { data } from '../../constants';
import './works.scss';

function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        { data.map((item) => {
          const {
            id, title, desc, imTag,
          } = item;
          return (

            <div className="container" key={id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src="mobile.png" alt="mobile" />
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
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/09/remote_work_infographic_blog.png?auto=format&q=60&w=450&h=270&fit=crop&crop=faces"
                    alt="websitetemplate"
                  />
                </div>
              </div>
            </div>

          );
        })}
      </div>
      <img src="arrow.png" alt="arrow left" className="arrow left" />
      <img src="arrow.png" alt="arrow right" className="arrow right" />
    </div>
  );
}

export default Works;
