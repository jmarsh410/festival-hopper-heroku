/* jshint ignore:start */

import React, { Component } from 'react';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import List from './list';
import Brewery from './brewery';
import Modal from './modal';
import LoadingSpinner from './loading-spinner';
import Search from './search';
import AppBar from './app-bar';
import utils from '../utils/utils';
import '../styles/brewery-search.css';
import '../styles/search.css';
import '../styles/button.css';

class BrewerySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: null,
      waiting: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  showModalSpinner() {
    this.setState({ waiting: true });
  }
  hideModalSpinner() {
    this.setState({ waiting: false });
  }
  handleSubmit(e) {
    const self = this;
    e.preventDefault();
    // get the contents of search-field and use it to search
    const breweryName = e.target.querySelector('.search-field').value;
    if (breweryName.length > 0) {
      // build the fetch
      const searchUrl = utils.generateBrewerySearchUrl(breweryName);
      console.log(searchUrl);
      let fetchResponse;
      self.showModalSpinner();
      fetch(searchUrl)
        .then((response) => {
          fetchResponse = response;
          return response.json();
        })
        .then((json) => {
          if (fetchResponse.status !== 200) {
            console.error(`The server responded with: ${fetchResponse.status}`);
            console.error(json.meta.error_detail);
          } else {
            console.log('call was successful');
            // log how many api calls you have left in the hour
            console.log(`Number of requests left are: ${fetchResponse.headers['x-ratelimit-remaining']}`);
            console.log(json);
            self.setState({
              breweries: utils.makeBreweryItems(json),
            });
          }
          self.hideModalSpinner();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  render() {
    let breweries = null;
    if (this.state.breweries) {
      breweries = (
        <List items={this.state.breweries} type={Brewery} />
      );
    }
    let modalSpinner = null;
    if (_.isBoolean(this.state.waiting) && this.state.waiting) {
      modalSpinner = (
        <Modal>
          <LoadingSpinner centered />
        </Modal>
      );
    }
    return (
      <ReactCSSTransitionGroup
        transitionName={utils.getPageDirection(this.props)}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div className="brewerySearch page">
          <AppBar
            title="Brewery Search"
            settings
            currentPath={this.props.location.pathname}
          />
          <Search
            handleSubmit={this.handleSubmit}
            inputName="brewery-name"
            placeholder="Search Breweries..."
          />
          { modalSpinner }
          { breweries }
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default BrewerySearch;
