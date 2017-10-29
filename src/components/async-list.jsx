import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list';

class AsyncList extends Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <div>loading...</div>
      );
    }
    return (
      <List {...this.props} />
    );
  }
}

AsyncList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.func,
};

AsyncList.defaultProps = {
  items: [],
  type: null,
};

export default AsyncList;
