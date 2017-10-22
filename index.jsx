import https from 'https';
import express from 'express';
import cookieParser from 'cookie-parser';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import nunjucks from 'nunjucks';
import dataRoutes from './db/data-routes';
import dbFunctions from './db/database-functions';

const app = express();

// use babel to create a node-readable version of all files used in App.js
// by converting it to es5 and removing requires to css files
// const test = require('./dist-server/bundle.js');
const App = require('./dist-server/bundle.js').App.default;

// serve static files from the static folder 
app.use(express.static('dist-client/static'));

// middleware for checking cookies
app.use(cookieParser());

// set the template engine to use nunjucks
app.set('views', './views');
nunjucks.configure('views', { express: app, autoescape: false });
app.set('view engine', 'nunjucks');

function checkLoginStatus(req) {
  // check the request for a cookie with a correct untapped id's
  if (req.cookies.untappd_access_token) {
    return true;
  }
  // the user is not logged in
  return false;
}

function handleOauth(req, res) {
  const url = `https://untappd.com/oauth/authorize/?client_id=${process.env.FH_CLIENT_ID}&client_secret=${process.env.FH_CLIENT_SECRET}&response_type=code&redirect_url=${process.env.FH_REDIRECT_URL}&code=${req.query.code}`;
  const apiReq = https.request(url, (apiRes) => {
    console.log('statusCode:', apiRes.statusCode);
    console.log('headers:', apiRes.headers);
    let body = '';
    apiRes.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
      body += chunk;
    });
    apiRes.on('end', () => {
      const bodyObj = JSON.parse(body);
      // handle errors if there are any
      if (apiRes.statusCode !== 200) {
        res.send(bodyObj.meta.developer_friendly || bodyObj.meta.error_detail);
        return;
      }
      // send the cookie and redirect to the curated page
      res.cookie('untappd_access_token', bodyObj.response.access_token, { maxAge: 31536000 }); // max age = 1 year
      res.writeHead(302, {
        Location: '/',
      });
      res.end();
    });
    // get the access_token out of the response
  });
  apiReq.on('error', (err) => {
    console.error(err);
  });
  apiReq.end();
}

function handleRequest(req, res) {
  const userIsLoggedIn = checkLoginStatus(req, res);
  const needsOauth = req.query.code;

  // if the request has a query code, then we need to go through the oauth process
  if (needsOauth) {
    handleOauth(req, res);
  } else {
    let configKey = 'none'; // key to use for the appData. it will be route specific
    const context = {};
    const promiseArray = [];
    // loop through the dataRoutes and build an array of
    // all data fetching promises that need to be fulfilled
    dataRoutes.some((route) => {
      if (route.url === req.url) {
        configKey = route.componentName;
        promiseArray.push(route.data()); // pushes promise onto the promise array
        return true;
      }
      return false;
    });
    // once any required data has been retrieved, render the app and store
    // the data on the context object used by StaticRouter
    Promise.all(promiseArray)
      .then((values) => {
        context.data = { [configKey]: values[0] };
        const html = ReactDomServer.renderToString(
          <StaticRouter
            location={req.url}
            context={context}
          >
            <App userIsLoggedIn={userIsLoggedIn} />
          </StaticRouter>,
        );

        // render the App for the appropriate url path
        if (context.url) { // HANDLE REDIRECTS
          res.writeHead(302, { // use a 302 becuase it doesn't get cached
            Location: context.url,
          });
          res.end();
        } else {
          res.render('index.nunj', { title: 'Festival Hopper', content: html, appData: JSON.stringify(context.data) });
        }
      })
      .catch((err) => {
        console.error('something went wrong when retrieving data for server side rendering');
        console.error(err);
      });
  }
}

// get a specific beer list from the db
app.get('/api/beer-list/curated', (req, res) => {
  dbFunctions.getCuratedBeerList(req.query.listid)
    .then((list) => {
      res.send(list);
      res.end();
    })
    .catch((err) => {
      console.log('something went wrong when retrieving beer list');
      console.log(err);
    });
});

app.get('/api/curated-lists', (req, res) => {
  // get the lists from the database
  dbFunctions.getAllCuratedLists()
    .then((docs) => {
      res.send(docs);
      res.end();
    })
    .catch((err) => {
      console.log('something went wrong when retrieving curated lists');
      console.log(err);
    });
});

app.get('/*', handleRequest);

app.listen(process.env.PORT || 5000, () => {
  console.log(`express app is listening on port ${process.env.PORT || 5000}`);
});
