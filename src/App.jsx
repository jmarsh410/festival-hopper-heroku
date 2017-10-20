
import React, { Component } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/header';
import Nav from './components/nav';
import Login from './components/login';
import Categories from './components/categories';
import BrewerySearch from './components/brewery-search';
import BeerListContainer from './components/beer-list-container';
import utils from './utils/utils';

// const urlParameter = '#access_token=';
// http://REDIRECT_URL#access_token=336DB8FB0FDED71D92E55514EFD2132931270D40

// test account user token
// #access_token=336DB8FB0FDED71D92E55514EFD2132931270D40

// use when testing signup process
// localStorage.clear();

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
    if (typeof localStorage === 'undefined' && this.props.userIsLoggedIn) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div>
        <Header />
        <Route
          path="/"
          children={props =>
          // used the children render method because it always gets
          // called regardless of current route/location
            (props.location.pathname !== '/login' ? (<Nav />) : null)
          }
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
          <Route path="/curated/:listId" component={BeerListContainer} />
          <Route exact path="/brewery-search" component={BrewerySearch} />
          <Route path="/brewery/:listId" component={BeerListContainer} />
          <Route path="/login" component={Login} />
        </main>
      </div>
    );
  }
}

export default App;
