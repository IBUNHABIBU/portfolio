import React from 'react';
import PropTypes from 'prop-types';

const MenuItems = ({ item, id, setMenuOpen }) => (
  <li>
    <a href={id} onClick={() => setMenuOpen(false)}>{item}</a>
    
    {/* <div>
      <p>{item}</p>
      <p>{id}</p>
    </div> */}
  </li>

);

MenuItems.prototype = {
  setMenuOpen: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MenuItems;
