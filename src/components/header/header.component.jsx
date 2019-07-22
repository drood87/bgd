import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link to="/">
      <h1 className="title">Blizzard Games Database</h1>
    </Link>
  </div>
);

export default Header;
