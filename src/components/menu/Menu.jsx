import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';
import MenuItems from '../menuItems/MenuItems';
import items from '../../constants';

const Menu = ({ menuOpen, setMenuOpen }) => (
  <div className={`menu ${menuOpen && 'active'}`}>
    <ul>
      {
        items.map(({ name, id }) => <MenuItems key={id} id={id} item={name} setMenuOpen={setMenuOpen} />)
      }
    </ul>
  </div>
);

Menu.prototype = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Menu;
