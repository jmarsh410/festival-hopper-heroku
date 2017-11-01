import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list';
import LoadingSpinner from './loading-spinner';

class AsyncList extends Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <LoadingSpinner centered />
      );
    }
    return (
      <List {...this.props} />
    );
  }
}

AsyncList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

AsyncList.defaultProps = {
  items: [],
};

export default AsyncList;
