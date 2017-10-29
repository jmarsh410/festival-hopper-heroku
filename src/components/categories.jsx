import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AsyncList from './async-list';
import Category from './category';
import AppBar from './app-bar';
import utils from '../utils/utils';

// css
import '../styles/categories.css';

class Categories extends Component {
  constructor(props) {
    super(props);
    let items;
    // if items were specifically passed in, use them
    if (this.props.items.length > 0) {
      items = this.props.items;
    } else if (utils.isClientSide() && window && window.appData && window.appData.categories) {
      // look for items stored in appData
      items = window.appData.categories;
    } else {
      items = [];
    }
    this.state = {
      items,
    };
  }
  componentWillMount() {
    if (utils.isClientSide() && this.state.items < 1) {
      const url = `http://${document.location.host}/api/curated-lists`;
      fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            console.error('could not get curated lists');
          }
          return response.json();
        })
        .then((json) => {
          this.items = json;
          console.log(json);
          this.setState({ items: json });
        })
        .catch((err) => {
          console.log('something went wrong with the categories fetch');
          console.log(err);
        });
    }
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={this.props.location
                          && this.props.location.state
                          && this.props.location.state.enterDirection
                          ? this.props.location.state.enterDirection
                          : 'fade'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div key="categories" className="categories page">
          <AppBar title="Events" />
          <AsyncList items={this.state.items} type={Category} />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.object,
  }),
};

Categories.defaultProps = {
  items: [],
  location: {
    state: {
      enterDirection: 'fade',
    },
  },
};

export default Categories;
