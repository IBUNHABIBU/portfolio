import React from 'react';
import './topbar.scss';

const Topbar = () => (
  <div className="topbar">
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className='logo'>geneous.</a>
        <div className="itemContainer"></div>
      </div>
      <div className="right"></div>
    </div>
  </div>
);

export default Topbar;
