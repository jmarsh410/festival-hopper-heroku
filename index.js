var express = require('express');
var app = express();
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

// set the template engine to use nunjucks
app.set('views', './views');
nunjucks.configure('views', {
  express: app,
  autoescape: true
});
app.set('view engine', 'nunjucks');

function renderApp(req, res){
  var context = {};
  // get the contents of the index.html file
  var html = ReactDomServer.renderToString(
    <StaticRouter
      location = {req.url}
      context = {context}
    >
      <App/>
    </StaticRouter>
  );
  // render the App for the appropriate url path
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end();
  } else {
    res.render('index.nunj', { title: 'Festival Hopper', content: html });
  }
}

app.get('/*', renderApp);

app.listen(process.env.PORT || 5000, function(){
  console.log('express app is listening on port ' + process.env.PORT || 5000);
});