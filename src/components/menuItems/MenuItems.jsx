import React from 'react';
import PropTypes from 'prop-types';

const MenuItems = ({ name, id, setMenuOpen }) => (
  <li>
    <a href={id} onClick={() => setMenuOpen(false)}>{name}</a>
  </li>
);

MenuItems.propTypes = {
  setMenuOpen: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MenuItems;
