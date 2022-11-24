import React from 'react';
import PropTypes from 'prop-types';

const MenuItems = ({ item, id }) => (
  <li>
    {/* <a href={id} onClick={() => setMenuOpen(false)}>{item}</a> */}
    <a href="#porr" onClick={() => setMenuOpen(false)}>hello</a>
  </li>

);

MenuItems.prototype = {
  setMenuOpen: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MenuItems;
