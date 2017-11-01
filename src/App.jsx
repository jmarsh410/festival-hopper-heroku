
import React, { Component } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from './components/nav';
import Login from './components/login';
import Categories from './components/categories';
import BrewerySearch from './components/brewery-search';
import BeerListContainer from './components/beer-list-container';
import Settings from './components/settings';
import utils from './utils/utils';
import './styles/pages.css';
import './styles/page-transitions.css';

class App extends Component {
  authenticate() {
    // check if the user's auth token can be found in local storage or a query string
    // be aware that this method won't work if there is any other information in the url 
    // after the access_token. though if access_token exists, it would always be alone 
    // since this would be right after authenticating    
    if (typeof localStorage !== 'undefined') { // localstorage won't exist on the server
      if (document.cookie.includes('untappd_access_token')) {
        return true;
      }
    }
    // if on the server and logged in, then return true
    if (!utils.isClientSide() && this.props.userIsLoggedIn) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div>
        <Route
          path="/"
          render={props => (
            props.location.pathname !== '/login' ? (<Nav {...props} />) : null
          )}
        />
        <main>
          <Route
            exact
            path="/"
            render={props => (this.authenticate()
              ? (<Redirect to="/curated" {...props} />)
              : (<Redirect to="/login" {...props} />))}
          />
          <Route
            path="/logout"
            render={(props) => {
              // delete the user's access token cookie
              if (utils.isClientSide()) {
                utils.removeClientCookie('untappd_access_token');
              }
              return (<Redirect to="/" {...props} />);
            }}
          />
          <Route
            exact
            path="/curated"
            render={(props) => {
              if (props.staticContext
                && props.staticContext.data
                && props.staticContext.data.categories) {
                // during SSR, pass in category data directly
                return (<Categories items={props.staticContext.data.categories} {...props} />);
              }
              return (<Categories {...props} />);
            }}
          />
          <Route
            path="/curated/:listId"
            render={(props) => {
              if (props.staticContext
                    && props.staticContext.data
                    && props.staticContext.data.beerList) {
                // during SSR, pass in curated list data directly
                return (<BeerListContainer list={props.staticContext.data.beerList} {...props} />);
              }
              return (<BeerListContainer {...props} />);
            }}
          />
          <Route exact path="/brewery-search" component={BrewerySearch} />
          <Route path="/brewery/:listId" component={BeerListContainer} />
          <Route path="/login" component={Login} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  userIsLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  userIsLoggedIn: false,
};


export default App;
