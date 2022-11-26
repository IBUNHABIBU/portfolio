import React from 'react';
import PropTypes from 'prop-types';
import './portfolioList.scss';

const PortfolioList = ({ name }) => (
  <>
    <li>{name}</li>
  </>
);

PortfolioList.propTypes = {
  name: PropTypes.string.isRequired,
};
export default PortfolioList;
