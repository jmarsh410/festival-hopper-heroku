/* jshint ignore:start */

import 'isomorphic-fetch';
import React, { Component } from 'react';
import List from './list';
import Category from './category';

// css
import '../styles/categories.css';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
    fetch('api/curated-lists')
      .then((response) => {
        if (response.status !== 200) {
          console.log('could not get curated lists');
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.items = json;
        this.setState({ isLoaded: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    if (!this.state.isLoaded) {
      return (
        <div>...loading</div>
      );
    }
    return (
      <div className="categories">
        <List items={this.items} type={Category} title="Curated Lists" />
      </div>
    );
  }
}

export default Categories;
