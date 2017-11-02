'use strict';

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _dataRoutes = require('./db/data-routes');

var _dataRoutes2 = _interopRequireDefault(_dataRoutes);

var _databaseFunctions = require('./db/database-functions');

var _databaseFunctions2 = _interopRequireDefault(_databaseFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app = (0, _express2.default)();

// use babel to create a node-readable version of all files used in App.js
// by converting it to es5 and removing requires to css files
// const test = require('./dist-server/bundle.js');
var App = require('./dist-server/bundle.js').App.default;

// serve static files from the static folder 
app.use(_express2.default.static('dist-client/static'));

// middleware for checking cookies
app.use((0, _cookieParser2.default)());

// set the template engine to use nunjucks
app.set('views', './views');
_nunjucks2.default.configure('views', { express: app, autoescape: false });
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
  var url = 'https://untappd.com/oauth/authorize/?client_id=' + process.env.FH_CLIENT_ID + '&client_secret=' + process.env.FH_CLIENT_SECRET + '&response_type=code&redirect_url=' + process.env.FH_REDIRECT_URL + '&code=' + req.query.code;
  var apiReq = _https2.default.request(url, function (apiRes) {
    console.log('statusCode:', apiRes.statusCode);
    console.log('headers:', apiRes.headers);
    var body = '';
    apiRes.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      body += chunk;
    });
    apiRes.on('end', function () {
      var bodyObj = JSON.parse(body);
      // handle errors if there are any
      if (apiRes.statusCode !== 200) {
        res.send(bodyObj.meta.developer_friendly || bodyObj.meta.error_detail);
        return;
      }
      // send the cookie and redirect to the curated page
      res.cookie('untappd_access_token', bodyObj.response.access_token, { maxAge: 31536000 }); // max age = 1 year
      res.writeHead(302, {
        Location: '/'
      });
      res.end();
    });
    // get the access_token out of the response
  });
  apiReq.on('error', function (err) {
    console.error(err);
  });
  apiReq.end();
}

function handleRequest(req, res) {
  var userIsLoggedIn = checkLoginStatus(req, res);
  var needsOauth = req.query.code;

  // if the request has a query code, then we need to go through the oauth process
  if (needsOauth) {
    handleOauth(req, res);
  } else {
    var configKey = 'none'; // key to use for the appData. it will be route specific
    var context = {};
    var promiseArray = [];
    // loop through the dataRoutes and build an array of
    // all data fetching promises that need to be fulfilled
    _dataRoutes2.default.forEach(function (route) {
      var matchObj = (0, _reactRouter.matchPath)(req.url, { path: route.url });
      if (matchObj && matchObj.isExact) {
        configKey = route.propName;
        promiseArray.push(route.data(matchObj)); // pushes promise onto the promise array
        return true;
      }
      return false;
    });
    // once any required data has been retrieved, render the app and store
    // the data on the context object used by StaticRouter
    Promise.all(promiseArray).then(function (values) {
      context.data = _defineProperty({}, configKey, values[0]);
      var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRouter.StaticRouter,
        {
          location: req.url,
          context: context
        },
        _react2.default.createElement(App, { userIsLoggedIn: userIsLoggedIn })
      ));

      // render the App for the appropriate url path
      if (context.url) {
        // HANDLE REDIRECTS
        res.writeHead(302, { // use a 302 becuase it doesn't get cached
          Location: context.url
        });
        res.end();
      } else {
        res.render('index.nunj', { title: 'Festival Hopper', content: html, appData: JSON.stringify(context.data) });
      }
    }).catch(function (err) {
      console.error('something went wrong when retrieving data for server side rendering');
      console.error(err);
    });
  }
}

// get a specific beer list from the db
app.get('/api/beer-list/curated', function (req, res) {
  _databaseFunctions2.default.getCuratedBeerList(req.query.listid).then(function (list) {
    res.send(list);
    res.end();
  }).catch(function (err) {
    console.log('something went wrong when retrieving beer list');
    console.log(err);
  });
});

app.get('/api/curated-lists', function (req, res) {
  // get the lists from the database
  _databaseFunctions2.default.getAllCuratedLists().then(function (docs) {
    res.send(docs);
    res.end();
  }).catch(function (err) {
    console.log('something went wrong when retrieving curated lists');
    console.log(err);
  });
});

app.get('/*', handleRequest);

app.listen(process.env.FH_PORT || 5000, function () {
  console.log('express app is listening on port ' + (process.env.FH_PORT || 5000));
});
