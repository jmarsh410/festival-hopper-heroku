
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
import utils from './utils/utils';

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
            props.location.pathname !== '/login' ? (<Nav />) : null
          )}
        />
        <main>
          <Route
            exact
            path="/"
            render={() => (this.authenticate()
              ? (<Redirect to="/curated" />)
              : (<Redirect to="/login" />))}
          />
          <Route
            path="/logout"
            render={() => {
              // delete the user's access token cookie
              if (utils.isClientSide()) {
                utils.removeClientCookie('untappd_access_token');
              }
              return (<Redirect to="/" />);
            }}
          />
          <Route
            exact
            path="/curated"
            render={({ staticContext }) => {
              if (staticContext && staticContext.data && staticContext.data.categories) {
                // during SSR, pass in category data directly
                return (<Categories items={staticContext.data.categories} />);
              }
              return (<Categories />);
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
