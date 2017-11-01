/* jshint ignore:start */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hopIcon from '../images/hop-up.png';
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <div className="header-logo">
            <span className="logo-left">Festival</span>
            <img
              className="logo-img"
              src={hopIcon}
              alt="HOP Icon created by The Crew at Fusionary"
            />
            <span className="logo-right">Hopper</span>
          </div>
        </Link>
      </header>
    );
  }
}

export default Header;
