// APP BAR CONTAINS A PAGE TITLE
// ALSO CONTAINS CONTROLS THAT ARE CONTEXTUALLY RELEVENT TO THE CURRENT PAGE
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/app-bar.css';

class AppBar extends Component {
  render() {
    return (
      <div className="appBar">
        <div className="appBar-left">{this.props.left}</div>
        <h1 className="appBar-title">{ this.props.title }</h1>
        <div className="appBar-right">{this.props.right}</div>
      </div>
    );
  }saf
}

AppBar.propTypes = {
  left: PropTypes.arrayOf(PropTypes.func),
  title: PropTypes.string,
  right: PropTypes.arrayOf(PropTypes.func),
};

AppBar.defaultProps = {
  left: null,
  title: 'Set the Title',
  right: null,
};

export default AppBar;
