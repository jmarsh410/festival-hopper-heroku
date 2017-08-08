'use strict';

var express = require('express');
var app = express();
var React = require('react');
var ReactDomServer = require('react-dom/server');
var StaticRouter = require('react-router').StaticRouter;

// use babel to create a node-readable version of all files used in App.js
// by converting it to es5 and removing requires to css files
var App = require('./dist-server/bundle.js').App.default;

// serve static files from the static folder 

function renderApp(req, res) {
  var context = {};
  // get the contents of the index.html file
  // console.log(typeof App);
  // console.log(App);
  // console.log(ReactDomServer.renderToString(React.createElement(App)));
  var html = ReactDomServer.renderToString(React.createElement(
    StaticRouter,
    {
      location: req.url,
      context: context
    },
    React.createElement(App, null)
  ));
  // render the App for the appropriate url path
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.write('\n      <!doctype html>\n      <html>\n      <head></head>\n      <body>\n      <div id="root">' + html + '</div>\n      </body>\n      </html>\n    ');
    res.end();
  }
}

app.get('/*', renderApp);

app.listen(process.env.PORT || 5000, function () {
  console.log(process.env.PORT);
  console.log('express app is listening on port 5000');
});
