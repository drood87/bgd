import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <Link to="/">
    <div className="header">
      <h1 className="title">Blizzard Games Database</h1>
    </div>
  </Link>
);

export default Header;
