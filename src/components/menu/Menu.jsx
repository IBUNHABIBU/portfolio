import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => (
  <div className={`menu ${menuOpen && 'active'}`}>
    <ul>
      <li>
        <a href="#intro" onClick={() => setMenuOpen(false)}>
          intro
        </a>
      </li>
      <li>
        <a href="#portfolio">
          portfolio
        </a>
      </li>
      <li>
        <a href="#works">
          works
        </a>
      </li>
      <li>
        <a href="#testimonials">
          testimonials
        </a>
      </li>
      <li>
        <a href="#contacts">contacts</a>
      </li>
    </ul>
  </div>
);

Menu.prototype = {
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired,
}

export default Menu;
