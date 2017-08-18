const https = require('https');
const express = require('express');
const cookieParser = require('cookie-parser');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const StaticRouter = require('react-router').StaticRouter;
const nunjucks = require('nunjucks');

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
  if (req.cookies.userToken) {
    return true;
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

function handleOath(req, res) {
  console.log('the query string is: ', req.query);
  const url = `https://untappd.com/oauth/authorize/?client_id=${process.env.FH_CLIENT_ID}&client_secret=${process.env.FH_CLIENT_SECRET}&response_type=code&redirect_url=${process.env.FH_REDIRECT_URL}&code=${req.query.code}`;
  console.log(`the url was: ${url}`);
  const apiReq = https.request(url, (apiRes) => {
    // handle errors if there are any

    // these aren't getting called, probably because this is an async operation,
    // and the response gets sent before it is done
    console.log('statusCode:', apiRes.statusCode);
    console.log('headers:', apiRes.headers);
    apiRes.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    apiRes.on('end', () => {
      res.send('the api responded');
    });
    // get the access_token out of the response
  });
  apiReq.on('error', (err) => {
    console.error(err);
  });
  apiReq.end();
}

function handleRequest(req, res) {
  const context = {};
  const userIsLoggedIn = checkLoginStatus(req, res);
  const needsOauth = req.query.code;

  // if the request has a query code, then we need to go through the oauth, process
  if (needsOauth) {
    handleOath(req, res);
  } else { // otherwise, the user is either logged in or not, in which case they can proceed
    // console.log(res.get('Set-Cookie'));
    // console.log('the user login status is: ' + userIsLoggedIn + '. and the path is ' + req.url);

    // get the contents of the index.html file
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
      res.render('index.nunj', { title: 'Festival Hopper', content: html });
    }
  }
}

app.get('/*', handleRequest);

app.listen(process.env.FH_PORT || 5000, () => {
  console.log(`express app is listening on port ${process.env.FH_PORT || 5000}`);
});
