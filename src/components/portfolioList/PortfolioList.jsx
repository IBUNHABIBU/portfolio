import React from 'react';
import PropTypes from 'prop-types';
import './portfolioList.scss';

const PortfolioList = ({
  name, active, setSelected, id,
}) => (
  <>
    <li
      className={active ? 'portfolioList active' : 'portfolioList'}
      onClick={() => setSelected(id)}
      aria-hidden="true"
    >
      {name}
    </li>
  </>
);

PortfolioList.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default PortfolioList;
