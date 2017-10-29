/* jshint ignore:start */

import React, { Component } from 'react';
import ButtonAnchor from './button-anchor';
import Header from './header';
import '../styles/login.css';
import pbuLogo from '../images/pbu_40_black.png';

const authURL = 'https://untappd.com/oauth/authenticate/?client_id=B37286DA6E41C3C75634F4C0DB726E889052525C&response_type=code&redirect_url=https://festival-hopper.herokuapp.com';

class Login extends Component {
  render() {
    return (
      <div className="page page--login">
        <Header />
        <section className="login">
          <img className="login-attribution" alt="Powered by Untappd" src={pbuLogo} />
          <p>You are not connected to Untappd, please login before proceeding</p>
          <ButtonAnchor
            href={authURL}
            classes="btn--block btn--positive btn--connect"
            text="Log In"
          />
        </section>
      </div>
    );
  }
}

export default Login;
