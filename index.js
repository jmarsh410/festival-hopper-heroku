var https = require('https');
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
  console.log('the query string is: ', req.query);

  // if we are getting the code, then send it back with more info
  if (req.query.code) {
    https.request('https://untappd.com/oauth/authorize/?client_id=' + process.env.FH_CLIENT_ID + '&client_secret=' + process.env.FH_CLIENT_SECRET + '&response_type=code&redirect_url=' + process.env.FH_REDIRECT_URL + '&code=' + req.query.code, function(res){
      // handle errors if there are any

      // these aren't getting called, probably because this is an async operation, and the response gets sent before it is done
      console.log(res.headers);
      console.log(res.statusCode);
      // get the access_token out of the response
    });
  }

  // if no cookie, check the request url for a hash that looks like #access_token=clienttoken
  // if (req.query.code){
  //   res.clearCookie('userToken');
  //   // create userToken cookie
  //   res.cookie('userToken', req.query.code, {
  //     maxAge: 60*60*24*7, // expires in one week
  //   });
  //   console.log('the cookie header is ' + res.get('Set-Cookie'));
  //   return true;
  // }
  // the user is not logged in
  return false;
}

function renderApp(req, res){
  var context = {};
  var userIsLoggedIn = checkLoginStatus(req, res);
  // console.log(res.get('Set-Cookie'));
  // console.log('the user login status is: ' + userIsLoggedIn + '. and the path is ' + req.url);

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
    res.writeHead(302, { // use a 302 becuase it doesn't get cached
      Location: context.url
    });
    res.end();
  } else {
    res.render('index.nunj', { title: 'Festival Hopper', content: html });
  }
}

app.get('/*', renderApp);

app.listen(process.env.FH_PORT || 5000, function(){
  console.log('express app is listening on port ' + process.env.FH_PORT || 5000);
});