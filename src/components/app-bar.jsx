// APP BAR CONTAINS A PAGE TITLE
// ALSO CONTAINS CONTROLS THAT ARE CONTEXTUALLY RELEVENT TO THE CURRENT PAGE
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/app-bar.css';
import '../styles/icons.css';

class AppBar extends Component {
  render() {
    const back = this.props.backPath.length === 0
      ? null
      : (<Link
        to={{
          pathname: this.props.backPath,
          state: {
            enterDirection: 'right',
            from: this.props.currentPath,
          },
        }}
      >
        <svg
          className="icon icon--back"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <title>back</title>
          <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z" />
        </svg>
      </Link>);
    const settings = this.props.settings
      ? (<Link
        to={{
          pathname: '/settings',
          state: {
            enterDirection: 'left',
            from: this.props.currentPath,
          },
        }}
      >
        <svg
          className="icon icon--cog icon--settings"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <title>cog</title>
          <path d="M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z" />
        </svg>
      </Link>)
      : null;
    return (
      <div className="appBar">
        <div className="appBar-left">
          {back}
        </div>
        <h1 className="appBar-title">{ this.props.title }</h1>
        <div className="appBar-right">
          {settings}
        </div>
      </div>
    );
  }
}

AppBar.propTypes = {
  backPath: PropTypes.string,
  title: PropTypes.string,
  currentPath: PropTypes.string,
  settings: PropTypes.bool,
};

AppBar.defaultProps = {
  backPath: '',
  title: 'Set the Title',
  currentPath: '',
  settings: false,
};

export default AppBar;
