var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var React = require('react');
var ReactDomServer = require('react-dom/server');
var StaticRouter = require('react-router').StaticRouter;
var nunjucks = require('nunjucks');

// use babel to create a node-readable version of all files used in App.js
// by converting it to es5 and removing requires to css files
// var test = require('./dist-server/bundle.js');
var App = require('./dist-server/bundle.js').App.default;

// serve static files from the static folder 
app.use(express.static('dist-client/static'));

// middleware for checking cookies
app.use(cookieParser());

// set the template engine to use nunjucks
app.set('views', './views');
nunjucks.configure('views', {express: app,autoescape: false});
app.set('view engine', 'nunjucks');

function checkLoginStatus(req, res){
  // check the request for a cookie with a correct untapped id's
  if (req.cookies.userToken) {
    return true;
  }
  const urlHash = '#access_token';
  // if no cookie, check the request url for a hash that looks like #access_token=clienttoken
  if (req.url.indexOf(urlHash) > -1){
    res.clearCookie('userToken');
    // create userToken cookie
    res.cookie('userToken', req.url.split(urlHash).pop(), {
      maxAge: 60*60*24*7, // expires in one week
    });
    return true;
  }
  // the user is not logged in
  return false;
}

function renderApp(req, res){
  var context = {};
  var userIsLoggedIn = checkLoginStatus(req, res);
  console.log('the user login status is: ' + userIsLoggedIn + '. and the path is ' + req.url);
  // get the contents of the index.html file
  var html = ReactDomServer.renderToString(
    <StaticRouter
      location = {req.url}
      context = {context}
    >
      <App userIsLoggedIn={userIsLoggedIn}/>
    </StaticRouter>
  );

  // render the App for the appropriate url path
  if (context.url) { // HANDLE REDIRECTS
    // on production, prevent caching so that redirects don't cache, because its super annoying
    if (process.env.FH_ENV === 'development') {
      console.log('app was redirected and not cached');
      res.append('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
    res.writeHead(301, {
      Location: context.url
    })
    res.end();
  } else {
    res.render('index.nunj', { title: 'Festival Hopper', content: html });
  }
}

app.get('/*', renderApp);

app.listen(process.env.FH_PORT || 5000, function(){
  console.log('express app is listening on port ' + process.env.FH_PORT || 5000);
});