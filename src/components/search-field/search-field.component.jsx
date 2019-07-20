import React from 'react';
import './search-field.styles.scss';

const SearchField = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchField;
