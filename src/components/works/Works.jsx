import React from 'react';
import './works.scss';

function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="mobile.png" alt="mobile" />
                </div>
                <h2>title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam libero voluptatum suscipit sapiente quidem aspernatur velit voluptates
                  laudantium sint, est ad ipsa tenetur iure iusto ipsam odio placeat quasi voluptas.
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
      </div>
      <img src="arrow.png" alt="arrow left" />
      <img src="arrow.png" alt="arrow right" />
    </div>
  );
}

export default Works;
