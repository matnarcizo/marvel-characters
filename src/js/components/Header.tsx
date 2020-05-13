import React, { FunctionComponent } from 'react';
import marvelLogo from '../../commons/assets/marvel-logo.png';
import './Header.scss';

const Header: FunctionComponent = () => (
  <div className="header">
    <img src={marvelLogo} style={{ height: 40, width: 'auto' }} />
  </div>
);

export default Header;
