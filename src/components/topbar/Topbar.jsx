import React from 'react';
import { Person, Mail } from '@material-ui/icons';
import './topbar.scss';

const Topbar = () => (
  <div className="topbar">
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">geneous.</a>
        <div className="itemContainer">
          <Person className="icon" />
          <span>+255717722477</span>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>ibunhabib@gmail.com</span>
        </div>
      </div>
      <div className="right" />
    </div>
  </div>
);

export default Topbar;
