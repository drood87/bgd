import React from 'react';
import PropTypes from 'prop-types';
import './search-field.styles.scss';

const SearchField = ({ placeholder }) => (
  <input className="search" type="search" placeholder={placeholder} />
);

SearchField.propTypes = {
  placeholder: PropTypes.string,
}.isRequired;

export default SearchField;
