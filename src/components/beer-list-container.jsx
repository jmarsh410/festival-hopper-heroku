/* jshint ignore:start */

import 'isomorphic-fetch';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Beer from './beer';
import BeerListControls from './beer-list-controls';
import List from './list';
import utils from '../utils/utils';
import LoadingSpinner from './loading-spinner';
import Modal from './modal';
import Notification from './notification';
import Search from './search';
import Select from './select';
import AppBar from './app-bar';
import CheckInButton from './checkin-button';

// storage for 
const apiCallInfo = {
  brewery: {
    endpoint: utils.generateBreweryInfoUrl,
    normalizeData: utils.normalizeBreweryBeers,
    makeList: utils.makeBreweryBeerList,
  },
};

const sortTerms = {
  'Brewery Name A-Z': 'brewery',
  'Beer Name A-Z': 'name',
};

class BeerListContainer extends Component {
  constructor(props) {
    super(props);

    // depending on server or client environment, look for data in certain places
    let list;
    // server render passes the list in
    if (this.props.list) {
      list = this.props.list;
    } else if (utils.isClientSide() && window && window.appData && window.appData.list) {
      // look for list stored in appData
      list = window.appData.list;
    } else {
      list = { id: null, name: null, beers: null, checkCount: 0, totalCount: 0 };
    }

    this.state = {
      list,
      errors: [],
      isLoading: false,
      notifications: [],
      waiting: false,
      searchField: null,
      sortField: Object.keys(sortTerms)[0],
    };
    this.handleCheckInClick = this.handleCheckInClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);

    this.defaultListSize = 25;
    this.maxItems = null;
    this.listId = this.props.match.params.listId;
    this.listType = this.props.location.pathname.split('/')[1];
    if (this.listType !== 'curated') {
      this.isAsync = true;
      this.needsFetch = true;
      this.apiEndpoint = apiCallInfo[this.listType].endpoint;
      this.normalizeData = apiCallInfo[this.listType].normalizeData;
      this.makeList = apiCallInfo[this.listType].makeList;
    }
  }
  componentWillMount() {
    if (utils.isClientSide()) {
      // add a scroll event listener
      window.addEventListener('scroll', this.handleScroll);
      this.getInitialBeers();
    }
  }
  componentWillUnmount() {
    if (utils.isClientSide()) {
      // add a scroll event listener
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  getInitialBeers() {
    if (utils.isClientSide()) {
      // check localStorage for this list's beers
      if (localStorage[this.listId] && !_.isEmpty(localStorage[this.listId])) {
        this.updateList(JSON.parse(localStorage[this.listId]));
      } else if (this.listType === 'curated') {
        // list isn't found in storage, make a fetch request for it
        // check whether this is a curated list or a list that needs an api call
        // request the curated list from Festival Hopper's database
        fetch(`//${document.location.host}/api/beer-list/curated?listid=${this.listId}`)
          .then((response) => {
            if (response.status !== 200) {
              console.error('could not get curated list');
            }
            return response.json();
          })
          .then((json) => {
            this.updateList(json);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        // if this list hasn't been saved, get it
        this.fetchBeersFromUntappd();
      }
    }
  }
  getFilteredItems() {
    const self = this;
    // filter the list based on current 'search' and 'sort' fields
    let beers = _.flatten(this.state.list.beers);
    // filter by search terms
    if (_.isString(this.state.searchField) && this.state.searchField.length > 0) {
      beers = beers.filter(beer => (
        beer.name.toLowerCase().replace(' ', '').includes(self.state.searchField)
      ));
    }
    // filter by sort term
    if (_.isString(this.state.sortField) && this.state.sortField.length > 0) {
      const term = sortTerms[this.state.sortField];
      beers = _.sortBy(beers, [term]);
    }
    return beers;
  }
  getFavoriteItems() {
    return _.filter(this.getFilteredItems(), item => (
      item.isFavorite === true
    ));
  }
  handleSearchSubmit(e) {
    e.preventDefault();
    // form element
    const searchTerm = e.target.querySelector('.search-field').value.toLowerCase().replace(' ', '');
    this.setState({
      searchField: searchTerm,
    });
  }
  handleSortChange(e) {
    const value = e.target.value;
    this.setState({
      sortField: value,
    });
  }
  handleInputChange(e) {
    const target = e.target;
    // don't do anything if the beer has already been checkedIn
    if (target.closest('.beer.checkedIn')) {
      e.preventDefault();
      return;
    }
    const row = target.closest('.beer');
    const bucket = row.getAttribute('data-bucket');
    const index = row.getAttribute('data-index');
    // make it a favorite
    if (target.closest('.beer-favorite')) {
      this.setState((prevState) => {
        prevState.list.beers[bucket][index].isFavorite = prevState.list.beers[bucket][index].isFavorite === true
          ? false
          : true;
        return { list: prevState.list };
      });
    }
    // check the beer
    if (target.closest('.beer-checkbox')) {
      this.setState((prevState) => {
        if (target.checked === true) {
          ++prevState.list.checkCount;
        } else {
          --prevState.list.checkCount;
        }
        prevState.list.beers[bucket][index].checked = target.checked;
        return { list: prevState.list };
      });
    }
    // open the drawer
    if (target.closest('.beer-drawerToggle')) {
      this.setState((prevState) => {
        // reverse the openness property that is on the item 
        prevState.list.beers[bucket][index].isOpen = prevState.list.beers[bucket][index].isOpen === true ? false : true;
        return { list: prevState.list };
      });
    }
    if (target.classList.contains('beer-description')) {
      this.setState((prevState) => {
        prevState.list.beers[bucket][index].description = target.value;
        return { list: prevState.list };
      });
    }
    if (target.classList.contains('beer-slider')) {
      this.setState((prevState) => {
        prevState.list.beers[bucket][index].rating = target.value;
        return { list: prevState.list };
      });
    }
  }
  handleCheckInClick(e) {
    const self = this;
    const target = e.target;
    const listContainer = target.closest('.beers');
    // set the loader
    const checkedboxes = listContainer.querySelectorAll('.beer:not(.checkedIn) .checkbox input:checked');
    let count = checkedboxes.length;
    self.showModalSpinner();
    const done = () => {
      // get rid of the spinner
      self.hideModalSpinner();
    };
    const next = () => {
      count += -1;
      if (count === 0) {
        done();
      }
    };
    // get the beers that are checked, but HAVENT been checked in yet
    // loop through the checked items and send a check in for each one
    this.clearNotifications();
    checkedboxes.forEach((checkbox) => {
      const beer = checkbox.closest('.beer');
      const bucket = beer.getAttribute('data-bucket');
      const index = beer.getAttribute('data-index');
      // make sure to multiply by -1. because the offset is positive if it is behind and vice versa
      const timezoneOffset = `${((new Date().getTimezoneOffset() / 60) * -1)}`; // make it a string
      const beerId = Number(beer.getAttribute('data-id'));
      const beerName = beer.getAttribute('data-name');
      const description = beer.querySelector('.beer-description').value;
      const rating = beer.querySelector('.beer-slider').value;
      // build up the post request to untappd
      const formData = new FormData();
      formData.append('gmt_offset', timezoneOffset);
      formData.append('timezone', 'PST');
      formData.append('bid', beerId);
      formData.append('shout', description);
      // only include ratings of 1 and higher. untappd won't accept lower values
      if (rating >= 1) {
        formData.append('rating', rating);
      }
      const fetchOpts = {
        method: 'POST',
        body: formData,
      };
      let fetchResponse;
      fetch(utils.generateCheckInUrl(), fetchOpts)
        .then((response) => {
          fetchResponse = response;
          return response.json();
        })
        .then((json) => {
          console.log(json);
          if (fetchResponse.status !== 200) {
            console.error(`The server responded with: ${fetchResponse.status}`);
            console.error(json.meta.error_detail);
            console.error(`The beer that messed up was: ${beerName}:${beerId}`);
            self.addNotification({ id: utils.generateId(), text: `There was a problem checking in ${beerName}. ${json.meta.error_detail}`, type: 'error' });
          } else {
            // log how many api calls you have left in the hour
            // this stopped working for some reason
            self.setState((prevState) => {
              const newState = Object.assign({}, prevState);
              newState.list.beers[bucket][index].isCheckedIn = true;
              // clear out the check count
              newState.list.checkCount = 0;
              newState.notifications.push({ id: utils.generateId(), text: 'call was successful', type: 'generic' });
              return {
                list: newState.list,
                notifications: newState.notifications,
              };
            });
          }
          next();
        })
        .catch((err) => {
          self.addNotification({ id: utils.generateId(), text: err, type: 'error' });
          console.log(err);
          next();
        });
    });
  }
  handleModalClick() {
    this.setState({
      notifications: [],
    });
  }
  fetchBeersFromUntappd(add) {
    const self = this;
    // this.state.list.beers is an array of arrays
    const bucketNum = add ? this.state.list.beers.length : 0;
    const apiOffset = add ? bucketNum * this.defaultListSize : 0;
    this.clearNotifications();
    this.showLoadingSpinner();
    fetch(this.apiEndpoint(this.listId, apiOffset))
      .then((response) => {
        if (response.status !== 200) {
          self.addNotification({ id: utils.generateId(), text: `Error: Server responded with status code of ${response.status}`, type: 'error' });
          return new Error(`The server responded with a status code of ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        if (add) {
          const newBeers = this.normalizeData(json, bucketNum);
          this.setState((prevState) => {
            const newState = Object.assign({}, prevState);
            newState.list.beers.push(newBeers);
            newState.list.beerCount += newBeers.length;
            return { list: newState.list };
          });
        } else {
          const list = self.makeList(json, self.listId);
          // set the state
          self.updateList(list);
        }
        self.hideLoadingSpinner();
      })
      .catch((err) => {
        self.addNotification({ id: utils.generateId(), text: err, type: 'error' });
        console.error(err);
      });
  }
  updateStorage(list) {
    // store beer list on localStorage
    if (utils.isClientSide()) {
      localStorage[this.listId] = JSON.stringify(list);
    }
  }
  updateList(list) {
    this.setState({
      list,
    });
  }
  handleScroll() {
    // if this is the bottom of the page, then see if theres more items to be loaded
    const bottomOfPage = window.innerHeight + window.pageYOffset === document.body.scrollHeight;
    const moreItemsNeedLoaded = this.state.list.maxItems > this.state.list.beerCount;
    if (bottomOfPage && moreItemsNeedLoaded) {
      this.fetchBeersFromUntappd(true);
    }
  }
  clearNotifications() {
    this.setState({
      notifications: [],
    });
  }
  addNotification(error) {
    this.setState((prevState) => {
      prevState.notifications.push(error);
      return { notifications: prevState.notifications };
    });
  }
  showModalSpinner() {
    this.setState({ waiting: true });
  }
  hideModalSpinner() {
    this.setState({ waiting: false });
  }
  showLoadingSpinner() {
    this.setState({ isLoading: true });
  }
  hideLoadingSpinner() {
    this.setState({ isLoading: false });
  }
  render() {
    // const self = this;
    // update the beer list on localStorage each time the state changes
    if (this.state.list.beers !== null) {
      this.updateStorage(this.state.list);
    }
    // show the 'check-in' button if some of the beers are checkec
    let button = null;
    if (this.state.list.checkCount > 0) {
      button = (
        <CheckInButton
          handleClick={this.handleCheckInClick}
          count={this.state.list.checkCount}
        />
      );
    }
    // waiting for beer check-ins to respond, show modal with loading spinner
    let waiting = null;
    if (_.isBoolean(this.state.waiting) && this.state.waiting) {
      waiting = (
        <Modal>
          <LoadingSpinner />
        </Modal>
      );
    }
    // waiting to load more beers, show loading spinner
    let loadingSpinner = null;
    if (this.state.isLoading) {
      loadingSpinner = (<LoadingSpinner />);
    }
    // if there are notifications, show them in a modal
    let modal = null;
    if (_.isArray(this.state.notifications) && !_.isEmpty(this.state.notifications)) {
      modal = (
        <Modal onCloseClick={this.handleModalClick} close={true}>
          <List type={Notification} items={this.state.notifications} />
        </Modal>
      );
    }
    // waiting for beer list to generate, show loading spinner
    if (!_.isArray(this.state.list.beers)) {
      return (
        <LoadingSpinner />
      );
    }

    // TODO: add controls
    // show favorites, show checked, clear all checked beers, "quick find alphabet side bar"
    // back button 

    // the favorites list
    // <List
    //   title="Favorites"
    //   items={this.getFavoriteItems()}
    //   type={Beer}
    //   onChange={this.handleInputChange}
    // />

    return (
      <div className="beers page">
        <AppBar
          title={this.state.list.name}
          left={[<Link to="/curated">Back</Link>]}
          right={[<Link to="/settings">Settings</Link>]}
        />
        <BeerListControls>
          <Search
            inputName="beer-search"
            placeholder="Search beer..."
            handleSubmit={this.handleSearchSubmit}
          />
          <Select
            id="beers-sort"
            label="Sort By:"
            options={Object.keys(sortTerms)}
            handleChange={this.handleSortChange}
          />
        </BeerListControls>
        <List
          title=""
          items={this.getFilteredItems()}
          type={Beer}
          onChange={this.handleInputChange}
        />
        {loadingSpinner}
        {button}
        {modal}
        {waiting}
      </div>
    );
  }
}

BeerListContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.object,
  }),
  list: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    beers: PropTypes.array,
    checkCount: PropTypes.number,
    totalCount: PropTypes.number,
  }),
};

BeerListContainer.defaultProps = {
  match: {
    params: {
      listId: null,
    },
  },
  location: {
    pathname: '',
  },
  list: { id: null, name: null, beers: null, checkCount: 0, totalCount: 0 },
};

export default BeerListContainer;
