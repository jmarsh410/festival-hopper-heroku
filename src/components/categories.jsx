import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list';
import Category from './category';
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
    if (this.state.items.length < 1) {
      return (
        <div>...loading</div>
      );
    }
    return (
      <div className="categories">
        <List items={this.state.items} type={Category} title="Curated Lists" />
      </div>
    );
  }
}

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

Categories.defaultProps = {
  items: [],
};

export default Categories;
