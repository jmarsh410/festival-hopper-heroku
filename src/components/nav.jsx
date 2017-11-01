/* jshint ignore:start */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.iconClickHandler = this.iconClickHandler.bind(this);
  }
  iconClickHandler() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    console.log(this.state);
  }
  render() {
    return (
      <nav id="nav" className="nav">
        <ul>
          <li>
            <NavLink
              to="/curated"
              activeClassName="selected"
              className="nav-link nav-curated"
            >Events</NavLink>
          </li>
          <li>
            <NavLink
              to="/brewery-search"
              activeClassName="selected"
              className="nav-link nav-breweries"
            >Search Breweries</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
