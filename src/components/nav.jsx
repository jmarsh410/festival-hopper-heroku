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
    const navClasses = this.state.isOpen ? 'nav nav--open' : 'nav';
    return (
      <div className="navContainer">
        <button className="hamburger" onClick={this.iconClickHandler}>Menu</button>
        <nav id="nav" className={navClasses}>
          <ul>
            <li>
              <NavLink
                to="/curated"
                activeClassName="selected"
                className="nav-link nav-curated"
              >Curated Lists</NavLink>
            </li>
            <li>
              <NavLink
                to="/brewery-search"
                activeClassName="selected"
                className="nav-link nav-breweries"
              >Search Breweries</NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                activeClassName="selected"
                className="nav-link nav-logout"
              >Log out</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
