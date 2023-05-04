import React from 'react';
import PropTypes from 'prop-types';
import {
  Person, Mail, GitHub, LinkedIn,
} from '@material-ui/icons';
import './topbar.scss';

const Topbar = ({ menuOpen, setMenuOpen }) => (
  <div className={`topbar ${menuOpen && 'active'}`}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">Engineer.</a>
        <div className="itemContainer">
          <Person className="icon" />
          <span>+255717722477</span>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>ibunhabib@gmail.com</span>
        </div>
        <div className="itemContainer">
          <a href="https://www.linkedin.com/in/salum-habibu/" target="_blank" rel="noreferrer">
            <LinkedIn className="icon" />
            LinkedIn
          </a>
        </div>
        <div className="itemContainer">
          <a href="https://github.com/IBUNHABIBU" target="_blank" rel="noreferrer">
            <GitHub className="icon" />
            Github
          </a>
        </div>
      </div>
      <div className="right">
        <div className="humburger" aria-hidden="true" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1" />
          <span className="line2" />
          <span className="line3" />
        </div>
      </div>
    </div>
  </div>
);

Topbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
export default Topbar;
