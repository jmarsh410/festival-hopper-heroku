import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AppBar from './app-bar';
import utils from '../utils/utils';

class Settings extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={utils.getPageDirection(this.props)}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div key="settings" className="settings page">
          <AppBar
            title="Settings"
            backPath={utils.getBackPath(this.props)}
          />
          <ul>
            <li>
              <Link
                to={{
                  pathname: '/logout',
                  state: {
                    enterDirection: 'left',
                  },
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Settings;
