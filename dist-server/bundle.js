exports["App"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".btn {\n  box-sizing: border-box;\n  padding: 10px;\n  color: white;\n  background-color: black;\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  border-radius: 0px;\n}\n.btn--block {\n  display: block;\n}\n.btn--positive {\n  background-color: var(--positive);\n}\n.btn--connect {\n  text-transform: uppercase;\n}\n.btn-checkIn {\n  position: fixed;\n  bottom: 15px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100px;\n  background-color: var(--positive);\n  border-radius: 20px;\n  color: white;\n  box-shadow: 0 0 10px 0 var(--positive);\n  border: 1px solid var(--positive);\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var Type = this.props.type;
      var flatItems = _lodash2.default.flatten(this.props.items); // flatten the items a single level
      var deDupeItems = _lodash2.default.uniqBy(flatItems, 'id'); // remove duplicate beers
      var html = deDupeItems.map(function (item, i) {
        // if the item doesn't have an id property, then default to showing the array index
        var key = item.id ? item.id : i;
        return _react2.default.createElement(
          'li',
          { key: key, className: 'list-item' },
          _react2.default.createElement(Type, { index: i, data: item })
        );
      });
      var title = null;
      // don't show title if there are no items in the list
      if (this.props.title && html.length > 0) {
        title = _react2.default.createElement(
          'h1',
          { className: 'list-title' },
          this.props.title
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'list' },
        title,
        _react2.default.createElement(
          'ul',
          { className: 'list-main', onClick: this.props.onClick, onChange: this.props.onChange },
          html
        )
      );
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* jshint ignore:start */

function normalizeBreweryBeers(json) {
  var bucket = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  // code for undocumented api call
  var array = json.response.beers.items;

  // code for the documented api call
  // const array = json.response.brewery.beer_list.items;

  var beers = [];
  array.forEach(function (obj, i) {
    var normalizedBeer = {
      id: obj.beer.bid,
      name: obj.beer.beer_name,
      brewery: obj.brewery.brewery_name,
      image: obj.beer.beer_label,
      description: '',
      rating: 0,
      isCheckedIn: false,
      isOpen: false,
      checked: false,
      bucket: bucket,
      index: i
    };
    beers.push(normalizedBeer);
  });
  return beers;
}

var utils = {
  generateId: function generateId(size) {
    if (typeof size !== 'number') {
      size = 5;
    }
    var value = '',
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        length = chars.length;
    for (var i = 0; i < size; ++i) {
      value += chars.charAt(Math.floor(Math.random() * length));
    }
    return value;
  },
  generateCheckInUrl: function generateCheckInUrl() {
    return 'https://api.untappd.com/v4/checkin/add?access_token=' + localStorage.userToken;
  },

  // lists the beers that a brewery has
  generateBreweryInfoUrl: function generateBreweryInfoUrl(breweryId) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    // brewery/beer_list/BREWERY_ID
    // there is an undocumented api endpoint that the untappd website uses which can be used to get a brewery's beers
    // this endpoint is subject to removal/changes since it is undocumented
    return 'https://api.untappd.com/v4/brewery/beer_list/' + breweryId + '?access_token=' + localStorage.userToken + '&offset=' + offset;

    // documented api call https://untappd.com/api/docs#breweryinfo
    // return 'https://api.untappd.com/v4/brewery/info/'+ breweryId + '?access_token=' + localStorage.userToken;
  },

  // lists breweries that match the search term
  generateBrewerySearchUrl: function generateBrewerySearchUrl(breweryName) {
    return 'https://api.untappd.com/v4/search/brewery/?access_token=' + localStorage.userToken + '&q=' + breweryName + '&limit=50';
  },

  normalizeBreweryBeers: normalizeBreweryBeers,
  makeBreweryBeerList: function makeBreweryBeerList(json, id) {
    var beers = normalizeBreweryBeers(json);
    // works off a previous list or creates a new one
    return {
      id: id,
      beers: [beers],
      checkCount: 0,
      maxItems: json.response.total_count,
      beerCount: beers.length
    };
  },
  makeBreweryItems: function makeBreweryItems(json) {
    // loop over each brewery and create an object for it, then return array of those objects
    var breweries = [];
    json.response.brewery.items.forEach(function (breweryObj) {
      // props: name, image, id
      var normalizedBrewery = {
        id: breweryObj.brewery.brewery_id,
        name: breweryObj.brewery.brewery_name,
        image: breweryObj.brewery.brewery_label
      };
      breweries.push(normalizedBrewery);
    });
    return breweries;
  }
};

exports.default = utils;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "458bbea78cc5bcb19cb3e7184c290db2.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".category {\n  display: block;\n  padding: 10px;\n  background-color: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-decoration: none;\n  color: black;\n}\n.category-image {\n  width: 50px;\n  height: 50px;\n  background: #ccc;\n}\n.category-image img {\n  width: 100%;\n}\n.category-info {\n  flex: 1;\n  margin-left: 10px;\n}", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var close = null;
      if (_lodash2.default.isBoolean(this.props.close) && this.props.close) {
        close = _react2.default.createElement('div', { className: 'modalClose', onClick: this.props.onCloseClick });
      }
      return _react2.default.createElement(
        'div',
        { className: 'modalContainer' },
        _react2.default.createElement(
          'div',
          { className: 'modalContent' },
          close,
          this.props.children
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var LoadingSpinner = function (_Component) {
  _inherits(LoadingSpinner, _Component);

  function LoadingSpinner() {
    _classCallCheck(this, LoadingSpinner);

    return _possibleConstructorReturn(this, (LoadingSpinner.__proto__ || Object.getPrototypeOf(LoadingSpinner)).apply(this, arguments));
  }

  _createClass(LoadingSpinner, [{
    key: 'render',
    value: function render() {
      var classes = 'loadingSpinner';
      if (this.props.centered) {
        classes += ' loadingSpinner--centered';
      }
      return _react2.default.createElement('div', { className: classes });
    }
  }]);

  return LoadingSpinner;
}(_react.Component);

exports.default = LoadingSpinner;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".search {\n  display: flex;\n}\n.search-field {\n  flex: 1;\n  padding: 10px;\n  box-shadow: none;\n  border-radius: 0;\n  border: none;\n}\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _header = __webpack_require__(13);

var _header2 = _interopRequireDefault(_header);

var _nav = __webpack_require__(15);

var _nav2 = _interopRequireDefault(_nav);

var _login = __webpack_require__(17);

var _login2 = _interopRequireDefault(_login);

var _categories = __webpack_require__(20);

var _categories2 = _interopRequireDefault(_categories);

var _brewerySearch = __webpack_require__(24);

var _brewerySearch2 = _interopRequireDefault(_brewerySearch);

var _beerListContainer = __webpack_require__(29);

var _beerListContainer2 = _interopRequireDefault(_beerListContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var urlParameter = '#access_token=';
// const client_id = 'B37286DA6E41C3C75634F4C0DB726E889052525C';
// const client_secret = '8E445ABC27BC99A5D67CBB98AEAA2E936E02AE28';
// const myToken = '336DB8FB0FDED71D92E55514EFD2132931270D40';
// http://REDIRECT_URL#access_token=336DB8FB0FDED71D92E55514EFD2132931270D40

// test account user token
// #access_token=336DB8FB0FDED71D92E55514EFD2132931270D40

// use when testing signup process
// localStorage.clear();

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'authenticate',
    value: function authenticate() {
      // check if the user's auth token can be found in local storage or a query string
      // be aware that this method won't work if there is any other information in the url after the access_token. though if access_token exists, it would always be alone since this would be right after authenticating    
      if (typeof localStorage !== 'undefined') {
        // localstorage won't exist on the server
        console.log('the authenticate is running on the client side once the scripts load');
        if (localStorage.getItem('userToken')) {
          return true;
        } else {
          var queryToken = window.location.href.indexOf(urlParameter) > -1 ? window.location.href.split(urlParameter).pop() : null;
          if (queryToken) {
            localStorage.setItem('userToken', queryToken);
            return true;
          }
        }
      }
      // if on the server and logged in, then return true
      if (typeof localStorage === 'undefined' && this.props.userIsLoggedIn) {
        return true;
      }
      console.log('authenticate returns false');
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', children: function children(props) {
            // used the children render method because it always gets called regardless of current route/location
            return props.location.pathname !== '/login' ? _react2.default.createElement(_nav2.default, null) : null;
          } }),
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
              return _this2.authenticate() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/curated' }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/logout', render: function render() {
              // delete the user token from local storage
              if (typeof localStorage !== 'undefined') {
                localStorage.clear();
              }
              return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/curated', component: _categories2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/curated/:listId', component: _beerListContainer2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/brewery-search', component: _brewerySearch2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/brewery/:listId', component: _beerListContainer2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _login2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          _react2.default.createElement(
            'div',
            { className: 'header-logo' },
            'Festival Hopper'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/logout', className: 'header-logout' },
          'Log out'
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".header {\n  margin-bottom: 0px;\n  padding: 10px;\n  color: white;\n  background-color: var(--dark-green);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header a {\n  text-decoration: none;\n  color: white;\n}\n.header a:visited {\n  color: white;\n}\n.header-logo {\n  font-size: var(--fs-l);\n  font-family: var(--title-font-family);\n}\n.header-logout {\n  color: white;\n}\n.header-logout:visited,\n.header-logout:active,\n.header-logout:focus {\n  color: white;\n}", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'nav' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/curated', activeClassName: 'selected', className: 'nav-curated' },
              'Curated Lists'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/brewery-search', activeClassName: 'selected', className: 'nav-breweries' },
              'Search Breweries'
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".nav ul {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.nav li:not(:last-child) {\n  border-right: 1px solid var(--dark);\n}\n.nav li {\n  padding: 20px;\n  flex: 1;\n  text-align: center;\n  background: var(--medium);\n}\n.nav a {\n  color: var(--text-light);\n  text-decoration: none;\n}\n.nav a.selected {\n  text-decoration: underline;\n}", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _buttonAnchor = __webpack_require__(18);

var _buttonAnchor2 = _interopRequireDefault(_buttonAnchor);

__webpack_require__(19);

var _pbu_40_black = __webpack_require__(7);

var _pbu_40_black2 = _interopRequireDefault(_pbu_40_black);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var authURL = 'https://untappd.com/oauth/authenticate/?client_id=B37286DA6E41C3C75634F4C0DB726E889052525C&response_type=token&redirect_url=http://festivalhopper.jeredmarshall.com/';

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'login' },
        _react2.default.createElement(
          'h1',
          { className: 'login-title' },
          'Festival Hopper'
        ),
        _react2.default.createElement('img', { className: 'login-attribution', alt: 'Powered by Untappd', src: _pbu_40_black2.default }),
        _react2.default.createElement(
          'p',
          null,
          'You are not connected to Untappd, please login before proceeding'
        ),
        _react2.default.createElement(_buttonAnchor2.default, { href: authURL, classes: 'btn--block btn--positive btn--connect', text: 'Connect to Untappd' })
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var ButtonAnchor = function (_Component) {
  _inherits(ButtonAnchor, _Component);

  function ButtonAnchor() {
    _classCallCheck(this, ButtonAnchor);

    return _possibleConstructorReturn(this, (ButtonAnchor.__proto__ || Object.getPrototypeOf(ButtonAnchor)).apply(this, arguments));
  }

  _createClass(ButtonAnchor, [{
    key: 'render',
    value: function render() {
      var classes = 'btn ' + this.props.classes;
      return _react2.default.createElement(
        'a',
        { href: this.props.href, className: classes },
        this.props.text
      );
    }
  }]);

  return ButtonAnchor;
}(_react.Component);

exports.default = ButtonAnchor;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".login {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 10px;\n  background-color: var(--x-light);\n  max-width: 250px;\n  text-align: center;\n  color: var(--text-dark);\n}\n.login-title {\n  margin: 0 0 10px;\n}\n.login p {\n  margin: 30px 0;\n}\n.login-attribution {\n  max-width: 100px;\n}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _category = __webpack_require__(22);

var _category2 = _interopRequireDefault(_category);

var _pbu_40_black = __webpack_require__(7);

var _pbu_40_black2 = _interopRequireDefault(_pbu_40_black);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

// css


var Items = [{
  id: _utils2.default.generateId(),
  name: 'Index Fest',
  location: 'Austin Statesman',
  img: _pbu_40_black2.default
}];

var Categories = function (_Component) {
  _inherits(Categories, _Component);

  function Categories() {
    _classCallCheck(this, Categories);

    return _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).apply(this, arguments));
  }

  _createClass(Categories, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'categories' },
        _react2.default.createElement(_list2.default, { items: Items, type: _category2.default, title: 'Curated Lists' })
      );
    }
  }]);

  return Categories;
}(_react.Component);

exports.default = Categories;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".list-title {\n  font-family: var(--title-font-family);\n  text-align: center;\n}\n.list-main {\n  /*background-color: #eee;*/\n  margin: 0;\n  padding: 0;\n}\n.list-item {\n  background-color: transparent;\n  list-style: none;\n  margin: 0 0 0px;\n  padding: 0;\n  border-bottom: 1px solid var(--gray);\n}\n.list-item:last-child {\n  border-bottom: none;\n}\n.list-item:last-child > * {\n  margin-bottom: 0;\n}", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).apply(this, arguments));
  }

  _createClass(Category, [{
    key: 'render',
    value: function render() {
      var id = '/curated/' + this.props.data.name.replace(' ', '-').toLowerCase();
      return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: {
            pathname: id
          }, className: 'category' },
        _react2.default.createElement(
          'div',
          { className: 'category-image' },
          _react2.default.createElement('img', { src: this.props.data.img, alt: this.props.data.name })
        ),
        _react2.default.createElement(
          'div',
          { className: 'category-info' },
          _react2.default.createElement(
            'div',
            { className: 'category-name' },
            this.props.data.name
          ),
          _react2.default.createElement(
            'div',
            { className: 'category-location' },
            this.props.data.location
          )
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".categories-separator {\n  text-align: center;\n  margin: 20px 0;\n}", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _brewery = __webpack_require__(25);

var _brewery2 = _interopRequireDefault(_brewery);

var _modal = __webpack_require__(9);

var _modal2 = _interopRequireDefault(_modal);

var _loadingSpinner = __webpack_require__(10);

var _loadingSpinner2 = _interopRequireDefault(_loadingSpinner);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(28);

__webpack_require__(11);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var BrewerySearch = function (_Component) {
  _inherits(BrewerySearch, _Component);

  function BrewerySearch(props) {
    _classCallCheck(this, BrewerySearch);

    var _this = _possibleConstructorReturn(this, (BrewerySearch.__proto__ || Object.getPrototypeOf(BrewerySearch)).call(this, props));

    _this.state = {
      breweries: null,
      waiting: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(BrewerySearch, [{
    key: 'showModalSpinner',
    value: function showModalSpinner() {
      this.setState({ waiting: true });
    }
  }, {
    key: 'hideModalSpinner',
    value: function hideModalSpinner() {
      this.setState({ waiting: false });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var self = this;
      e.preventDefault();
      // get the contents of search-field and use it to search
      var breweryName = e.target.querySelector('.search-field').value;
      if (breweryName.length > 0) {
        // build the fetch
        var searchUrl = _utils2.default.generateBrewerySearchUrl(breweryName);
        var fetchResponse = void 0;
        self.showModalSpinner();
        fetch(searchUrl).then(function (response) {
          fetchResponse = response;
          return response.json();
        }).then(function (json) {
          if (fetchResponse.status !== 200) {
            console.error('The server responded with: ' + fetchResponse.status);
            console.error(json.meta.error_detail);
          } else {
            console.log('call was successful');
            // log how many api calls you have left in the hour
            console.log('Number of requests left are: ' + fetchResponse.headers['x-ratelimit-remaining']);
            console.log(json);
            self.setState({
              breweries: _utils2.default.makeBreweryItems(json)
            });
          }
          self.hideModalSpinner();
        }).catch(function (err) {
          console.error(err);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var breweries = null;
      if (this.state.breweries) {
        breweries = _react2.default.createElement(_list2.default, { items: this.state.breweries, type: _brewery2.default, title: 'Breweries' });
      }
      var modalSpinner = null;
      if (_lodash2.default.isBoolean(this.state.waiting) && this.state.waiting) {
        modalSpinner = _react2.default.createElement(
          _modal2.default,
          null,
          _react2.default.createElement(_loadingSpinner2.default, { centered: true })
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'brewerySearch' },
        _react2.default.createElement(
          'form',
          { className: 'search', onSubmit: this.handleSubmit, noValidate: true },
          _react2.default.createElement('input', { className: 'search-field', type: 'text', name: 'brewery-name', placeholder: 'Search Breweries' }),
          _react2.default.createElement(
            'button',
            { className: 'search-btn btn btn--positive', type: 'submit' },
            'Submit'
          )
        ),
        modalSpinner,
        breweries
      );
    }
  }]);

  return BrewerySearch;
}(_react.Component);

exports.default = BrewerySearch;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var Brewery = function (_Component) {
  _inherits(Brewery, _Component);

  function Brewery() {
    _classCallCheck(this, Brewery);

    return _possibleConstructorReturn(this, (Brewery.__proto__ || Object.getPrototypeOf(Brewery)).apply(this, arguments));
  }

  _createClass(Brewery, [{
    key: 'render',
    value: function render() {
      var breweryObj = this.props.data;
      var id = breweryObj.id;
      var name = breweryObj.name;
      var image = breweryObj.image;
      return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: {
            pathname: 'brewery/' + id
          }, className: 'category' },
        _react2.default.createElement(
          'div',
          { className: 'category-image' },
          _react2.default.createElement('img', { src: image, alt: name })
        ),
        _react2.default.createElement(
          'div',
          { className: 'category-info' },
          _react2.default.createElement(
            'div',
            { className: 'category-name' },
            name
          )
        )
      );
    }
  }]);

  return Brewery;
}(_react.Component);

exports.default = Brewery;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".modalContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: rgba(0,0,0,.7);\n}\n.modalClose {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  height: 15px;\n  width: 15px;\n  cursor: pointer;\n}\n.modalClose:before,\n.modalClose:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  height: 3px;\n  width: 100%;\n  background: var(--dark);\n  transform-origin: 50% 50%;\n  transform: translateY(-50%) rotate(45deg);\n}\n.modalClose:after {\n  transform: translateY(-50%) rotate(-45deg);\n}\n.modalContent {\n  z-index: 1;\n  position: absolute;\n  height: 80vh;\n  width: 80vw;\n  max-height: 500px;\n  max-width: 300px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: white;\n  box-shadow: 0 0 5px 0 #000;\n  border-radius: 5px;\n  padding: 30px;\n  box-sizing: border-box;\n  overflow: scroll;\n}", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loadingSpinner {\n  animation: 1s infinite spin;\n  background-color: transparent;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: 10px auto;\n  box-shadow: inset 0 0 0 4px var(--light-gray);\n}\n.loadingSpinner--centered {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.loadingSpinner:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border-radius: 50%;\n  border: 4px solid transparent;\n  border-left-color: var(--green);\n}", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".brewerySearch {\n  margin-top: 4%;\n}", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _beer = __webpack_require__(30);

var _beer2 = _interopRequireDefault(_beer);

var _beerListControls = __webpack_require__(34);

var _beerListControls2 = _interopRequireDefault(_beerListControls);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

var _dataLists = __webpack_require__(36);

var _dataLists2 = _interopRequireDefault(_dataLists);

var _loadingSpinner = __webpack_require__(10);

var _loadingSpinner2 = _interopRequireDefault(_loadingSpinner);

var _modal = __webpack_require__(9);

var _modal2 = _interopRequireDefault(_modal);

var _notification = __webpack_require__(38);

var _notification2 = _interopRequireDefault(_notification);

var _search = __webpack_require__(40);

var _search2 = _interopRequireDefault(_search);

var _select = __webpack_require__(41);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

// storage for 
var apiCallInfo = {
  brewery: {
    endpoint: _utils2.default.generateBreweryInfoUrl,
    normalizeData: _utils2.default.normalizeBreweryBeers,
    makeList: _utils2.default.makeBreweryBeerList
  }
};

var sortTerms = {
  'Brewery Name A-Z': 'brewery',
  'Beer Name A-Z': 'name'
};

var BeerListContainer = function (_Component) {
  _inherits(BeerListContainer, _Component);

  function BeerListContainer(props) {
    _classCallCheck(this, BeerListContainer);

    var _this = _possibleConstructorReturn(this, (BeerListContainer.__proto__ || Object.getPrototypeOf(BeerListContainer)).call(this, props));

    _this.state = {
      list: { id: null, beers: null, checkCount: 0, totalCount: 0 },
      errors: [],
      isLoading: false,
      notifications: [],
      waiting: false,
      searchField: null,
      sortField: Object.keys(sortTerms)[0]
    };
    _this.handleCheckInClick = _this.handleCheckInClick.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.handleModalClick = _this.handleModalClick.bind(_this);
    _this.handleSearchSubmit = _this.handleSearchSubmit.bind(_this);
    _this.handleSortChange = _this.handleSortChange.bind(_this);

    _this.defaultListSize = 25;
    _this.maxItems = null;
    _this.listId = _this.props.match.params.listId;
    _this.listType = _this.props.location.pathname.split('/')[1];
    if (_this.listType !== 'curated') {
      _this.isAsync = true;
      _this.needsFetch = true;
      _this.apiEndpoint = apiCallInfo[_this.listType].endpoint;
      _this.normalizeData = apiCallInfo[_this.listType].normalizeData;
      _this.makeList = apiCallInfo[_this.listType].makeList;
    }
    return _this;
  }

  _createClass(BeerListContainer, [{
    key: 'showLoadingSpinner',
    value: function showLoadingSpinner() {
      this.setState({ isLoading: true });
    }
  }, {
    key: 'hideLoadingSpinner',
    value: function hideLoadingSpinner() {
      this.setState({ isLoading: false });
    }
  }, {
    key: 'showModalSpinner',
    value: function showModalSpinner() {
      this.setState({ waiting: true });
    }
  }, {
    key: 'hideModalSpinner',
    value: function hideModalSpinner() {
      this.setState({ waiting: false });
    }
  }, {
    key: 'addNotification',
    value: function addNotification(error) {
      this.setState(function (prevState) {
        prevState.notifications.push(error);
        return { notifications: prevState.notifications };
      });
    }
  }, {
    key: 'clearNotifications',
    value: function clearNotifications() {
      this.setState({
        notifications: []
      });
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(e) {
      // if this is the bottom of the page, then see if theres more items to be loaded
      var bottomOfPage = window.innerHeight + window.pageYOffset === document.body.scrollHeight;
      var moreItemsNeedLoaded = this.state.list.maxItems > this.state.list.beerCount;
      if (bottomOfPage && moreItemsNeedLoaded) {
        this.fetchBeers(true);
      }
    }
  }, {
    key: 'updateList',
    value: function updateList(list) {
      this.setState({
        list: list
      });
    }
  }, {
    key: 'updateStorage',
    value: function updateStorage(list) {
      // store beer list on localStorage
      localStorage[this.listId] = JSON.stringify(list);
    }
  }, {
    key: 'fetchBeers',
    value: function fetchBeers(add) {
      var _this2 = this;

      var self = this;
      // this.state.list.beers is an array of arrays
      var bucketNum = add ? this.state.list.beers.length : 0;
      var apiOffset = add ? bucketNum * this.defaultListSize : 0;
      this.clearNotifications();
      this.showLoadingSpinner();
      fetch(this.apiEndpoint(this.listId, apiOffset)).then(function (response) {
        if (response.status !== 200) {
          self.addNotification({ id: _utils2.default.generateId(), text: 'Error: Server responded with status code of ' + response.status, type: 'error' });
          return new Error('The server responded with a status code of' + response.status);
        }
        return response.json();
      }).then(function (json) {
        console.log(json);
        if (add) {
          var newBeers = _this2.normalizeData(json, bucketNum);
          _this2.setState(function (prevState) {
            prevState.list.beers.push(newBeers);
            prevState.list.beerCount += newBeers.length;
            return { list: prevState.list };
          });
        } else {
          var list = self.makeList(json, self.listId);
          // set the state
          self.updateList(list);
        }
        self.hideLoadingSpinner();
      }).catch(function (err) {
        self.addNotification({ id: _utils2.default.generateId(), text: err, type: 'error' });
        console.error(err);
      });
    }
  }, {
    key: 'getInitialBeers',
    value: function getInitialBeers() {
      if (!localStorage.userToken) {
        return console.log('User is not logged in');
      }
      // check localStorage for this list's beers
      if (localStorage[this.listId]) {
        this.updateList(JSON.parse(localStorage[this.listId]));
      } else {
        // check whether this is a curated(stored) list or a list that needs an api call
        if (this.listType === 'curated') {
          // make sure the beers in the dataset are curated/normalized
          // const list = utils.makeCuratedList(DataLists[this.listId], this.listId);
          var list = _dataLists2.default[this.listId];
          this.updateList(list);
        } else {
          // if this list hasn't been saved, get it
          this.fetchBeers();
        }
      }
    }
  }, {
    key: 'handleModalClick',
    value: function handleModalClick(e) {
      this.setState({
        notifications: []
      });
    }
  }, {
    key: 'handleCheckInClick',
    value: function handleCheckInClick(e) {
      var self = this;
      var target = e.target;
      var listContainer = target.closest('.beers');
      // set the loader
      var checkedboxes = listContainer.querySelectorAll('.beer:not(.checkedIn) .checkbox input:checked');
      var count = checkedboxes.length;
      self.showModalSpinner();
      var done = function done() {
        // get rid of the spinner
        self.hideModalSpinner();
      };
      var next = function next() {
        --count;
        if (count === 0) {
          done();
        }
      };
      // get the beers that are checked, but HAVENT been checked in yet
      // loop through the checked items and send a check in for each one
      this.clearNotifications();
      checkedboxes.forEach(function (checkbox) {
        var beer = checkbox.closest('.beer');
        var bucket = beer.getAttribute('data-bucket');
        var index = beer.getAttribute('data-index');
        // make sure to multiply by -1. because the offset is positive if it is behind and vice versa
        var timezoneOffset = new Date().getTimezoneOffset() / 60 * -1 + ''; // make it a string
        var beerId = Number(beer.getAttribute('data-id'));
        var beerName = beer.getAttribute('data-name');
        var description = beer.querySelector('.beer-description').value;
        var rating = beer.querySelector('.beer-slider').value;
        // build up the post request to untappd
        var formData = new FormData();
        formData.append('gmt_offset', timezoneOffset);
        formData.append('timezone', 'PST');
        formData.append('bid', beerId);
        formData.append('shout', description);
        // only include ratings of 1 and higher. untappd won't accept lower values
        if (rating >= 1) {
          formData.append('rating', rating);
        }
        var fetchOpts = {
          method: 'POST',
          body: formData
        };
        var fetchResponse = void 0;
        fetch(_utils2.default.generateCheckInUrl(), fetchOpts).then(function (response) {
          fetchResponse = response;
          return response.json();
        }).then(function (json) {
          console.log(json);
          if (fetchResponse.status !== 200) {
            console.error('The server responded with: ' + fetchResponse.status);
            console.error(json.meta.error_detail);
            console.error('The beer that messed up was: ' + beerName + ':' + beerId);
            self.addNotification({ id: _utils2.default.generateId(), text: 'There was a problem checking in ' + beerName + '. ' + json.meta.error_detail, type: 'error' });
          } else {
            // log how many api calls you have left in the hour
            // this stopped working for some reason
            // console.log('Number of requests left are: ' + fetchResponse.headers['X-Ratelimit-Remaining']);
            self.setState(function (prevState) {
              prevState.list.beers[bucket][index].isCheckedIn = true;
              // clear out the check count
              prevState.list.checkCount = 0;
              prevState.notifications.push({ id: _utils2.default.generateId(), text: 'call was successful', type: 'generic' });
              return {
                list: prevState.list,
                notifications: prevState.notifications
              };
            });
          }
          next();
        }).catch(function (err) {
          self.addNotification({ id: _utils2.default.generateId(), text: err, type: 'error' });
          console.log(err);
          next();
        });
      });
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      var target = e.target;
      // don't do anything if the beer has already been checkedIn
      if (target.closest('.beer.checkedIn')) {
        e.preventDefault();
        return;
      }
      var row = target.closest('.beer');
      var bucket = row.getAttribute('data-bucket');
      var index = row.getAttribute('data-index');
      // make it a favorite
      if (target.closest('.beer-favorite')) {
        this.setState(function (prevState) {
          prevState.list.beers[bucket][index].isFavorite = prevState.list.beers[bucket][index].isFavorite === true ? false : true;
          return { list: prevState.list };
        });
      }
      // check the beer
      if (target.closest('.beer-checkbox')) {
        this.setState(function (prevState) {
          if (target.checked === true) {
            ++prevState.list.checkCount;
          } else {
            --prevState.list.checkCount;
          }
          prevState.list.beers[bucket][index].checked = target.checked;
          return { list: prevState.list };
        });
      }
      // open the drawer
      if (target.closest('.beer-drawerToggle')) {
        this.setState(function (prevState) {
          // reverse the openness property that is on the item 
          prevState.list.beers[bucket][index].isOpen = prevState.list.beers[bucket][index].isOpen === true ? false : true;
          return { list: prevState.list };
        });
      }
      if (target.classList.contains('beer-description')) {
        this.setState(function (prevState) {
          prevState.list.beers[bucket][index].description = target.value;
          return { list: prevState.list };
        });
      }
      if (target.classList.contains('beer-slider')) {
        this.setState(function (prevState) {
          prevState.list.beers[bucket][index].rating = target.value;
          return { list: prevState.list };
        });
      }
    }
  }, {
    key: 'handleSearchSubmit',
    value: function handleSearchSubmit(e) {
      e.preventDefault();
      // form element
      var searchTerm = e.target.querySelector('.search-field').value.toLowerCase().replace(' ', '');
      this.setState({
        searchField: searchTerm
      });
    }
  }, {
    key: 'handleSortChange',
    value: function handleSortChange(e) {
      var value = e.target.value;
      this.setState({
        sortField: value
      });
    }
  }, {
    key: 'getFavoriteItems',
    value: function getFavoriteItems() {
      return _lodash2.default.filter(this.getFilteredItems(), function (item) {
        return item.isFavorite === true;
      });
    }
  }, {
    key: 'getFilteredItems',
    value: function getFilteredItems() {
      var self = this;
      // filter the list based on current 'search' and 'sort' fields
      var beers = _lodash2.default.flatten(this.state.list.beers);
      // filter by search terms
      if (_lodash2.default.isString(this.state.searchField) && this.state.searchField.length > 0) {
        beers = beers.filter(function (beer) {
          return beer.name.toLowerCase().replace(' ', '').includes(self.state.searchField) ? true : false;
        });
      }
      // filter by sort term
      if (_lodash2.default.isString(this.state.sortField) && this.state.sortField.length > 0) {
        var term = sortTerms[this.state.sortField];
        beers = _lodash2.default.sortBy(beers, [term]);
      }
      return beers;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      // add a scroll event listener
      window.addEventListener('scroll', this.handleScroll);
      this.getInitialBeers();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // add a scroll event listener
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      // const self = this;
      // update the beer list on localStorage each time the state changes
      if (this.state.list.beers !== null) {
        this.updateStorage(this.state.list);
      }
      // show the 'check-in' button if some of the beers are checkec
      var button = null;
      if (this.state.list.checkCount > 0) {
        button = _react2.default.createElement(
          'button',
          { className: 'btn btn-checkIn', onClick: this.handleCheckInClick },
          'Check In: ',
          this.state.list.checkCount
        );
      }
      // waiting for beer check-ins to respond, show modal with loading spinner
      var waiting = null;
      if (_lodash2.default.isBoolean(this.state.waiting) && this.state.waiting) {
        waiting = _react2.default.createElement(
          _modal2.default,
          null,
          _react2.default.createElement(_loadingSpinner2.default, null)
        );
      }
      // waiting to load more beers, show loading spinner
      var loadingSpinner = null;
      if (this.state.isLoading) {
        loadingSpinner = _react2.default.createElement(_loadingSpinner2.default, null);
      }
      // if there are notifications, show them in a modal
      var modal = null;
      if (_lodash2.default.isArray(this.state.notifications) && !_lodash2.default.isEmpty(this.state.notifications)) {
        modal = _react2.default.createElement(
          _modal2.default,
          { onCloseClick: this.handleModalClick, close: true },
          _react2.default.createElement(_list2.default, { type: _notification2.default, items: this.state.notifications })
        );
      }
      // waiting for beer list to generate, show loading spinner
      if (!_lodash2.default.isArray(this.state.list.beers)) {
        return _react2.default.createElement(_loadingSpinner2.default, null);
      }
      return _react2.default.createElement(
        'div',
        { className: 'beers' },
        _react2.default.createElement(
          _beerListControls2.default,
          null,
          _react2.default.createElement(_search2.default, { inputName: 'beer-search', placeholder: 'Search beer name...', handleSubmit: this.handleSearchSubmit }),
          _react2.default.createElement(_select2.default, { id: 'beers-sort', label: 'Sort By:', options: Object.keys(sortTerms), handleChange: this.handleSortChange })
        ),
        _react2.default.createElement(_list2.default, { title: 'Favorites', items: this.getFavoriteItems(), type: _beer2.default, onChange: this.handleInputChange }),
        _react2.default.createElement(_list2.default, { title: this.listId, items: this.getFilteredItems(), type: _beer2.default, onChange: this.handleInputChange }),
        loadingSpinner,
        button,
        modal,
        waiting
      );
    }
  }]);

  return BeerListContainer;
}(_react.Component);

exports.default = BeerListContainer;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _checkbox = __webpack_require__(31);

var _checkbox2 = _interopRequireDefault(_checkbox);

__webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var Beer = function (_Component) {
  _inherits(Beer, _Component);

  function Beer() {
    _classCallCheck(this, Beer);

    return _possibleConstructorReturn(this, (Beer.__proto__ || Object.getPrototypeOf(Beer)).apply(this, arguments));
  }

  _createClass(Beer, [{
    key: 'render',
    value: function render() {
      var id = this.props.data.id;
      var name = this.props.data.name;
      var brewery = this.props.data.brewery;
      var image = this.props.data.image;
      var rating = this.props.data.rating;
      var description = this.props.data.description;
      var isCheckedIn = this.props.data.isCheckedIn;
      var isFavorite = this.props.data.isFavorite;
      var checked = this.props.data.checked;
      var isOpen = this.props.data.isOpen;
      var bucket = this.props.data.bucket;
      var index = this.props.data.index;
      var classes = 'beer';
      if (isCheckedIn) {
        classes += ' checkedIn';
      }
      if (isOpen) {
        classes += ' open';
      }
      return _react2.default.createElement(
        'div',
        { className: classes, 'data-id': id, 'data-name': name, 'data-bucket': bucket, 'data-index': index },
        _react2.default.createElement(
          'div',
          { className: 'beer-main' },
          _react2.default.createElement(
            'div',
            { className: 'beer-image' },
            _react2.default.createElement('img', { src: image, alt: name })
          ),
          _react2.default.createElement(
            'div',
            { className: 'beer-info' },
            _react2.default.createElement(
              'div',
              { className: 'beer-name' },
              name
            ),
            _react2.default.createElement(
              'div',
              { className: 'beer-brewery' },
              brewery
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'beer-actions' },
            _react2.default.createElement(_checkbox2.default, { classes: 'beer-favorite checkbox--favorite', checked: isFavorite }),
            _react2.default.createElement(_checkbox2.default, { classes: 'beer-checkbox checkbox--normal', checked: checked }),
            _react2.default.createElement(_checkbox2.default, { classes: 'beer-drawerToggle checkbox--arrow', checked: isOpen })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'beer-drawer' },
          _react2.default.createElement(
            'div',
            { className: 'beer-drawerInner' },
            _react2.default.createElement('textarea', { className: 'beer-description', maxLength: '140', defaultValue: description }),
            _react2.default.createElement(
              'div',
              { className: 'beer-rating' },
              _react2.default.createElement('input', { type: 'range', min: '0', max: '5', step: '.5', defaultValue: rating, className: 'beer-slider' }),
              _react2.default.createElement(
                'div',
                { className: 'beer-sliderValue' },
                rating
              )
            )
          )
        )
      );
    }
  }]);

  return Beer;
}(_react.Component);

exports.default = Beer;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes + ' checkbox';
      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement('input', { type: 'checkbox', className: 'checkbox-input', 'data-checked': this.props.checked, defaultChecked: this.props.checked }),
        _react2.default.createElement('span', { className: 'checkbox-vis' })
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

exports.default = Checkbox;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".checkbox {\n  position: relative;\n}\n.checkbox-input {\n  opacity: 0;\n  display: block;\n  width: 25px;\n  height: 25px;\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n}\n.checkbox-vis {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n}\n.checkbox--normal .checkbox-vis {\n  background-color: #ccc;\n}\n.checkbox--normal .checkbox-vis:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: block;\n  width: 6px;\n  height: 12px;\n  border: solid #000;\n  border-width: 0 4px 4px 0;\n  transform: translateY(-2px) rotate(45deg);\n  transition: .1s opacity ease;\n  opacity: 0;\n}\n.checkbox--normal .checkbox-input[data-checked=\"true\"] + .checkbox-vis:before,\n.checkbox--normal .checkbox-input[data-checked=\"true\"] + .checkbox-vis:before {\n  opacity: 1;\n}\n.checkbox--favorite .checkbox-vis {\n  background-color: var(--gray);\n  height: 12px;\n  width: 12px;\n  margin: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transform: rotate(-45deg);\n}\n.checkbox--favorite .checkbox-vis:before,\n.checkbox--favorite .checkbox-vis:after {\n  content: \"\";\n  background-color: var(--gray);\n  border-radius: 50%;\n  height: 12px;\n  position: absolute;\n  width: 12px;\n}\n.checkbox--favorite .checkbox-vis:before {\n  top: -6px;\n  left: 0;\n}\n.checkbox--favorite .checkbox-vis:after {\n  left: 6px;\n  top: 0;\n}\n.checkbox--favorite .checkbox-input[data-checked=\"true\"] + .checkbox-vis,\n.checkbox--favorite .checkbox-input[data-checked=\"true\"] + .checkbox-vis:before,\n.checkbox--favorite .checkbox-input[data-checked=\"true\"] + .checkbox-vis:after {\n  background-color: var(--positive);\n}\n.checkbox--arrow .checkbox-vis {\n  background-color: transparent;\n}\n.checkbox--arrow .checkbox-vis:before {\n  content: '';\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-right: 2px solid var(--positive);\n  border-bottom: 2px solid var(--positive);\n  transform: translateY(-4px) rotate(45deg);\n  transform-origin: 50% 50%;\n  transition: .3s all ease;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.checkbox--arrow .checkbox-input[data-checked=\"true\"] + .checkbox-vis:before {\n  transform: rotate(225deg);\n}", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".beers {\n  margin-bottom: 100px;\n}\n/*.beer.checkedIn {\n  opacity: .5;\n}*/\n.beer {\n  background-color: var(--gray);\n}\n.beer-main {\n  display: block;\n  padding: 20px;\n  background-color: #ddd;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none;\n  color: black;\n}\n.beer-image {\n  width: 50px;\n  height: 50px;\n  background-color: #ccc;\n}\n.beer-image img {\n  width: 100%;\n}\n.beer-info {\n  flex: 1;\n  margin: 0 10px;\n}\n.beer-actions {\n  display: flex;\n  align-items: center;\n}\n.beer-actions > * {\n  margin-left: 10px;\n}\n/*move this into a separate module*/\n.beer-checkbox {\n  max-height: 25px;\n}\n.checkedIn .beer-checkbox .checkbox-vis {\n  background-color: transparent;\n}\n.checkedIn .beer-checkbox .checkbox-input:checked + .checkbox-vis:before {\n  border-width: 4px;\n  border-radius: 50%;\n  width: 12px;\n  border-color: var(--light-green);\n  transform: translateY(0px);\n}\n.beer-drawer {\n  overflow:hidden;\n  max-height: 0px;\n  box-sizing: border-box;\n  transition: .3s max-height linear;\n}\n.beer.open .beer-drawer {\n  max-height: 300px;\n}\n.beer-drawerInner {\n  padding: 20px;\n}\n.beer-description {\n  width: 100%;\n  max-width: 100%;\n  min-height: 50px;\n  max-height: 100px;\n  margin-bottom: 10px;\n}\n.beer-rating {\n  display: flex;\n}\n.beer-slider {\n  flex: 1;\n}\n.beer-sliderValue {\n  padding: 10px;\n  background-color: #eee;\n  margin-left: 10px;\n  min-width: 55px;\n  text-align: center;\n  box-sizing: border-box;\n}", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var BeerListControls = function (_Component) {
  _inherits(BeerListControls, _Component);

  function BeerListControls() {
    _classCallCheck(this, BeerListControls);

    return _possibleConstructorReturn(this, (BeerListControls.__proto__ || Object.getPrototypeOf(BeerListControls)).apply(this, arguments));
  }

  _createClass(BeerListControls, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'beerListControls' },
        this.props.children
      );
    }
  }]);

  return BeerListControls;
}(_react.Component);

exports.default = BeerListControls;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".beerListControls {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 10px;\n  background: var(--light-gray);\n  border-bottom: 1px solid var(--gray);\n}\n/*.beerListControls > * {\n  margin: 5px;\n}*/\n.beerListControls .search {\n  flex: 1 1 51%;\n  margin-bottom: 10px;\n}\n.beerListControls .select {\n  flex: 1 1 51%;\n}\n/*@media screen and (min-width:700px) {\n  .beerListControls .select {\n    padding-left: 20px;\n  }\n}*/", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexFest = __webpack_require__(37);

var _indexFest2 = _interopRequireDefault(_indexFest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// key names must match the corresponding :listId url parameter
var DataLists = {
  'index-fest': _indexFest2.default
};
exports.default = DataLists;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var index = { "id": "index", "beers": [[{ "id": 1181221, "name": "IPA", "brewery": "Oskar Blues Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1181221_ee813_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 0 }, { "id": 5912, "name": "420 Extra Pale Ale", "brewery": "SweetWater Brewing Company ", "image": "https://untappd.akamaized.net/site/beer_logos/beer-5912_11c77_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 1 }, { "id": 1512388, "name": "Tangerine Express IPA", "brewery": "Stone Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1512388_beecb_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 2 }, { "id": 1961981, "name": "Cool Breeze", "brewery": "SweetWater Brewing Company ", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1961981_b5b4e_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 3 }, { "id": 1637314, "name": "Lil' Hop Session IPA", "brewery": "Treaty Oak", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 4 }, { "id": 1424308, "name": "Goin' Coastal", "brewery": "SweetWater Brewing Company ", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1424308_37aa5_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 5 }, { "id": 25717, "name": "Thirsty Goat Amber", "brewery": "Thirsty Planet Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-25717_e9c12_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 6 }, { "id": 7053, "name": "IPA", "brewery": "SweetWater Brewing Company ", "image": "https://untappd.akamaized.net/site/beer_logos/beer-7053_4f710_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 7 }, { "id": 1394476, "name": "Pulled Porter (Dank Tank)", "brewery": "SweetWater Brewing Company ", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1394476_edeaa_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 8 }, { "id": 1286598, "name": "Double Bastard in the Rye", "brewery": "Arrogant Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1286598_4d8e1_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 9 }, { "id": 1933139, "name": "Stone Jindia Pale Ale", "brewery": "Stone Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1933139_2c06a_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 10 }, { "id": 45660, "name": "Chigoatlé Amber", "brewery": "Thirsty Planet Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 11 }, { "id": 2021012, "name": "Maine / Stone Dayslayer (2017)", "brewery": "Stone Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-2021012_2832d_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 12 }, { "id": 34309, "name": "Buckethead IPA", "brewery": "Thirsty Planet Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-34309_7dde7_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 13 }, { "id": 136850, "name": "Chupahopra", "brewery": "Twisted X Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-136850_2cd3d_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 14 }, { "id": 11821, "name": "Grande Réserve 17", "brewery": "Unibroue", "image": "https://untappd.akamaized.net/site/beer_logos/beer-Unibroue17_11821.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 15 }, { "id": 1096244, "name": "Lazy Day Lager", "brewery": "Uncle Billy's Brewery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 16 }, { "id": 1046722, "name": "Sour Monkey", "brewery": "Victory Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1046722_0a795_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 17 }, { "id": 289064, "name": "The Green Room IPA", "brewery": "Uncle Billy's Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-289064_9d212_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 18 }, { "id": 2023539, "name": "Lust For Life Scotch Ale W/ Poppy", "brewery": "Uncle Billy's Brewery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 19 }, { "id": 3787, "name": "Golden Monkey", "brewery": "Victory Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-3787_3bf47_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 20 }, { "id": 6988, "name": "La Fin Du Monde", "brewery": "Unibroue", "image": "https://untappd.akamaized.net/site/beer_logos/beer-6988_a1ad3_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 21 }, { "id": 1930151, "name": "Blackboard Series (no. 05) Cream Ale With Cold Brew Coffee", "brewery": "Victory Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1930151_07b33_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 22 }, { "id": 83450, "name": "Cow Creek", "brewery": "Twisted X Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-83450_1e1a2_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 23 }, { "id": 1866223, "name": "Hye-Biscus", "brewery": "Twisted X Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 24 }, { "id": 1785500, "name": "Midnight Magician", "brewery": "Twisted X Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 25 }, { "id": 1206045, "name": "Later Days", "brewery": "Twisted X Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1206045_76313_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 26 }, { "id": 18545, "name": "Summer Love", "brewery": "Victory Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-18545_7bc75_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 27 }, { "id": 1902011, "name": "Fitzhugh Mild Ale", "brewery": "Treaty Oak Brewing", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 28 }, { "id": 1511457, "name": "Austin Lager", "brewery": "Twisted X Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1511457_128ee_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 29 }, { "id": 1902009, "name": "Brightside Blonde Ale", "brewery": "Treaty Oak Brewing", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 30 }, { "id": 1589149, "name": "À Tout Le Monde", "brewery": "Unibroue", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1589149_cad89_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 31 }, { "id": 2023768, "name": "Éphémère Sureau (Elderberry)", "brewery": "Unibroue", "image": "https://untappd.akamaized.net/site/beer_logos/beer-2023768_6be9f_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 32 }, { "id": 236773, "name": "Duvel Rustica", "brewery": "Brewery Ommegang", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_236773_c9719fd0c02e934153d2571083ef.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 33 }, { "id": 164088, "name": "LOBO Texas Lager", "brewery": "Pedernales Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_164088_sm_970c4b622a4ddb10911a938f5af769.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 34 }, { "id": 1218448, "name": "Beerito", "brewery": "Oskar Blues Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1218448_55c4b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 35 }, { "id": 1663706, "name": "Bitter Battle APA", "brewery": "Pedernales Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1663706_8f803_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 36 }, { "id": 172161, "name": "Revolver Bock", "brewery": "Revolver Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-Bock_172161.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 37 }, { "id": 6119, "name": "Witte", "brewery": "Brewery Ommegang", "image": "https://untappd.akamaized.net/site/beer_logos/beer-6119_0d6ba_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 38 }, { "id": 228839, "name": "High Brass", "brewery": "Revolver Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-HighBrass_228839.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 39 }, { "id": 1855181, "name": "Joe's Magical Pills", "brewery": "Pinthouse Pizza", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 40 }, { "id": 711159, "name": "Thrilla In Brazilla", "brewery": "Peticolas Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-711159_9e071_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 41 }, { "id": 2068003, "name": "Fugli", "brewery": "Oskar Blues Brewery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 42 }, { "id": 381032, "name": "Burro's Breakfast", "brewery": "Pinthouse Pizza", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_381032_sm_4fb33d751149f6a9454d02a674f1e6.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 43 }, { "id": 1750393, "name": "Robert Earl Keen Front Porch Amber Ale", "brewery": "Pedernales Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 44 }, { "id": 1885271, "name": "Zappy Squid", "brewery": "Pinthouse Pizza", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 45 }, { "id": 63554, "name": "Velvet Hammer", "brewery": "Peticolas Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-VelvetHammer_63554.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 46 }, { "id": 1618674, "name": "Fruition", "brewery": "Brewery Ommegang", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1618674_99e6b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 47 }, { "id": 33689, "name": "Texas Red", "brewery": "Rahr & Sons Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_33689_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 48 }, { "id": 317342, "name": "Old Beluga", "brewery": "Pinthouse Pizza", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 49 }, { "id": 1290350, "name": "Electric Jellyfish", "brewery": "Pinthouse Pizza", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 50 }, { "id": 230709, "name": "Ironhead IPA", "brewery": "Revolver Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-IronheadIPA_230709.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 51 }, { "id": 841832, "name": "Sangre Y Miel", "brewery": "Revolver Brewing", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 52 }, { "id": 706376, "name": "Fracker Barrel One", "brewery": "Revolver Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-706376_d56f0_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 53 }, { "id": 172056, "name": "Blood & Honey", "brewery": "Revolver Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-172056_21cfd_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 54 }, { "id": 1517506, "name": "Great Beyond", "brewery": "Brewery Ommegang", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1517506_bdbcb_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 55 }, { "id": 912790, "name": "Pinner Throwback IPA", "brewery": "Oskar Blues Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-912790_13346_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 56 }, { "id": 10759, "name": "Dale's Pale Ale", "brewery": "Oskar Blues Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-dalesPaleAle.jpg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 57 }, { "id": 1105309, "name": "Anodyne", "brewery": "Revolver Brewing", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 58 }, { "id": 395436, "name": "Rapture", "brewery": "Rabbit Hole Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-395436_61c43_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 59 }, { "id": 446746, "name": "Sit Down Or I'll Sit You Down", "brewery": "Peticolas Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_446746_sm_61459e8fa5962dfbd26cd6edf22394.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 60 }, { "id": 1911780, "name": "JabberBOCK", "brewery": "Rabbit Hole Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1911780_0a101_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 61 }, { "id": 199948, "name": "Sidewinder", "brewery": "Revolver Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-Sidewinder_199948.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 62 }, { "id": 1789346, "name": "Handlebier", "brewery": "Pinthouse Pizza", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 63 }, { "id": 1236923, "name": "Rosetta", "brewery": "Brewery Ommegang", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1236923_5044b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 64 }, { "id": 1367875, "name": "The Mandarin", "brewery": "Revolver Brewing", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 65 }, { "id": 805959, "name": "Off With Your Red", "brewery": "Rabbit Hole Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-805959_9d3d6_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 66 }, { "id": 1648399, "name": "Full-Tang IPA", "brewery": "Revolver Brewing", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 67 }, { "id": 2018352, "name": "Big & Bright IPA", "brewery": "Karbach Brewing Co", "image": "https://untappd.akamaized.net/site/beer_logos/beer-2018352_2ac6f_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 68 }, { "id": 73130, "name": "Hopadillo IPA", "brewery": "Karbach Brewing Co", "image": "https://untappd.akamaized.net/site/beer_logos/beer-HopadilloIPA_73130.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 69 }, { "id": 285993, "name": "Weekend Warrior", "brewery": "Karbach Brewing Co", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_285993_eea46e222396a59a85d530d0bfb6.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 70 }, { "id": 340846, "name": "Love Street", "brewery": "Karbach Brewing Co", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_340846_sm_85befe468096d0fd5914e1a26b22da.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 71 }, { "id": 1009713, "name": "Staycation", "brewery": "Karbach Brewing Co", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1009713_8f74e_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 72 }, { "id": 80229, "name": "Rodeo Clown Double IPA", "brewery": "Karbach Brewing Co", "image": "https://untappd.akamaized.net/site/beer_logos/beer-RodeoClownDoubleIPA_80229.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 73 }, { "id": 1966526, "name": "Lemon And Ginger Radler", "brewery": "Karbach Brewing Co", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1966526_90e61_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 74 }, { "id": 75531, "name": "Weisse Versa Wheat", "brewery": "Karbach Brewing Co", "image": "https://untappd.akamaized.net/site/beer_logos/beer-WeisseVersaWheat_75531.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 75 }, { "id": 262533, "name": "Alamo Golden Ale", "brewery": "Alamo Beer Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_262533_sm_20c5a441622d6f010cc6137fbbb3af.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 76 }, { "id": 2007437, "name": "Lager", "brewery": "Altstadt Brewery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 77 }, { "id": 450088, "name": "Stingo", "brewery": "(512) Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 78 }, { "id": 2011758, "name": "Fiestival", "brewery": "Alamo Beer Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 79 }, { "id": 4084, "name": "Smoked Porter", "brewery": "Alaskan Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-4084_2b271_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 80 }, { "id": 580023, "name": "All Call", "brewery": "Lakewood Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-580023_5309c_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 81 }, { "id": 8324, "name": "Stash IPA", "brewery": "Independence Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-8324_4da9b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 82 }, { "id": 1476222, "name": "SMaSH#4 - Cashmere IPA", "brewery": "(512) Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 83 }, { "id": 1531123, "name": "Liberty Lunch", "brewery": "Independence Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1531123_707fd_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 84 }, { "id": 2019291, "name": "Vintage Nun (2017)", "brewery": "Adelbert's Brewery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 85 }, { "id": 60844, "name": "Lakewood Lager", "brewery": "Lakewood Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-60844_95eb6_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 86 }, { "id": 1930831, "name": "Buzzbait Blonde", "brewery": "Adelbert's Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1930831_3fc08_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 87 }, { "id": 1246420, "name": "Space Bloody Orange", "brewery": "Ace Cider (The California Cider Company)", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1246420_22f0a_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 88 }, { "id": 84251, "name": "Crisp Apple", "brewery": "Angry Orchard Cider Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-CrispApple_84251.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 89 }, { "id": 347375, "name": "Till & Toil", "brewery": "Lakewood Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-347375_cef82_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 90 }, { "id": 581892, "name": "Raspberry Temptress", "brewery": "Lakewood Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-581892_25794_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 91 }, { "id": 52332, "name": "The Temptress", "brewery": "Lakewood Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-52332_42777_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 92 }, { "id": 3603, "name": "Ace Perry Cider", "brewery": "Ace Cider (The California Cider Company)", "image": "https://untappd.akamaized.net/site/beer_logos/beer-AcePerryCider_3603.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 93 }, { "id": 1276863, "name": "Mango Wit", "brewery": "Adelbert's Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1276863_efaa9_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 94 }, { "id": 1000595, "name": "Amber Lager", "brewery": "Alamo Beer Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1000595_82f87_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 95 }, { "id": 1024472, "name": "Redbud Berliner Weisse", "brewery": "Independence Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1024472_4469d_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 96 }, { "id": 4086, "name": "Summer Ale", "brewery": "Alaskan Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-4086_1b5c0_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 97 }, { "id": 761232, "name": "Power & Light", "brewery": "Independence Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-761232_46be2_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 98 }, { "id": 421931, "name": "White Rabbit", "brewery": "Independence Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-421931_ad9f4_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 99 }, { "id": 1703845, "name": "30th Anniversary Perseverance Ale", "brewery": "Alaskan Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1703845_31ffd_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 100 }, { "id": 5738, "name": "(512) Pecan Porter", "brewery": "(512) Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-PecanPorter_5738.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 101 }, { "id": 1980883, "name": "Alamo IPA", "brewery": "Alamo Beer Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 102 }, { "id": 4079, "name": "Amber", "brewery": "Alaskan Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_4079_sm_1dd91bc692daf15218735d260b047d.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 103 }, { "id": 461908, "name": "Goatman", "brewery": "Lakewood Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-461908_86380_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 104 }, { "id": 134642, "name": "Tripel B", "brewery": "Adelbert's Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_134642_sm_ddd26965dcd87fa2688679c08c0665.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 105 }, { "id": 1904900, "name": "The Illustrated Man", "brewery": "Independence Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1904900_a8c63_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 106 }, { "id": 602768, "name": "Ace Pineapple Cider", "brewery": "Ace Cider (The California Cider Company)", "image": "https://untappd.akamaized.net/site/beer_logos/beer-602768_6b136_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 107 }, { "id": 2032368, "name": "Kolsch", "brewery": "Altstadt Brewery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 108 }, { "id": 4902, "name": "Dirty Blonde", "brewery": "Atwater Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-4902_efe2a_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 109 }, { "id": 818461, "name": "Crackberry", "brewery": "Bishop Cider Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 110 }, { "id": 1935907, "name": "Unfiltered Sculpin", "brewery": "Ballast Point Brewing & Spirits", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1935907_4f876_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 111 }, { "id": 1069310, "name": "Raspberry Sour", "brewery": "Avery Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1069310_df207_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 112 }, { "id": 1447769, "name": "Oatsmobile Ale", "brewery": "Bell's Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1447769_ea5e7_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 113 }, { "id": 79280, "name": "Purple Gang Pilsner", "brewery": "Atwater Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-79280_b4b1b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 114 }, { "id": 446701, "name": "Green Apple", "brewery": "Angry Orchard Cider Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_446701_sm_afb9064fb4514cb9ba086523262f84.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 115 }, { "id": 860450, "name": "Little Boss", "brewery": "Blue Owl Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-860450_5283d_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 116 }, { "id": 952936, "name": "Nectar", "brewery": "Bishop Cider Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 117 }, { "id": 5558, "name": "Sculpin IPA", "brewery": "Ballast Point Brewing & Spirits", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_5558_sm_568370b6ade3c2ed1ffd9a311fa92f.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 118 }, { "id": 880465, "name": "Peppermint Victory At Sea", "brewery": "Ballast Point Brewing & Spirits", "image": "https://untappd.akamaized.net/site/beer_logos/beer-880465_bc7ab_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 119 }, { "id": 4515, "name": "The Maharaja", "brewery": "Avery Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-Maharaja_4515.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 120 }, { "id": 1445738, "name": "Sour Cherry", "brewery": "Bishop Cider Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 121 }, { "id": 1490878, "name": "Tropical Pale Ale", "brewery": "Boulevard Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1490878_9c6e5_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 122 }, { "id": 1576590, "name": "Vinho Pearde", "brewery": "Argus Cidery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 123 }, { "id": 1472063, "name": "Coconut Porter", "brewery": "Avery Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1472063_98400_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 124 }, { "id": 52024, "name": "Fire Eagle", "brewery": "Austin Beerworks", "image": "https://untappd.akamaized.net/site/beer_logos/beer-austinBeerworksFireEagle.jpg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 125 }, { "id": 53251, "name": "Black Thunder", "brewery": "Austin Beerworks", "image": "https://untappd.akamaized.net/site/beer_logos/beer-austinBeerworksBlackThunder.jpg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 126 }, { "id": 1468388, "name": "Tejas Negra", "brewery": "Big Bend Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1468388_8c392_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 127 }, { "id": 1974093, "name": "Blood Orange", "brewery": "Austin Eastciders", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1974093_d81dd_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 128 }, { "id": 1677565, "name": "Easy Apple", "brewery": "Angry Orchard Cider Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1677565_0b30b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 129 }, { "id": 1389067, "name": "Hopped Cider", "brewery": "Austin Eastciders", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1389067_5a2b2_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 130 }, { "id": 16581, "name": "Oberon Ale", "brewery": "Bell's Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-16581_2ac08_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 131 }, { "id": 1910224, "name": "American Kolsch", "brewery": "Boulevard Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1910224_47792_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 132 }, { "id": 4133, "name": "Two Hearted Ale", "brewery": "Bell's Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-4133_13fdb_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 133 }, { "id": 1082056, "name": "Foreign Export Stout", "brewery": "BrainDead Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1082056_8fb59_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 134 }, { "id": 1529374, "name": "Pineapple Cider", "brewery": "Austin Eastciders", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1529374_7c01e_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 135 }, { "id": 1504257, "name": "Idle Playthings", "brewery": "BrainDead Brewing", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 136 }, { "id": 1492338, "name": "Balmorhea", "brewery": "Big Bend Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1492338_c79d0_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 137 }, { "id": 1633856, "name": "Tiny Barrel Series: Little Orange Gose", "brewery": "Blue Owl Brewing", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 138 }, { "id": 10891, "name": "Tank 7 Farmhouse Ale", "brewery": "Boulevard Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-10891_26699_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 139 }, { "id": 1002626, "name": "Ciderkin", "brewery": "Argus Cidery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 140 }, { "id": 1396953, "name": "We Own the Night", "brewery": "BrainDead Brewing", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 141 }, { "id": 1101500, "name": "Whango", "brewery": "Atwater Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1101500_ea49b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 142 }, { "id": 1487488, "name": "El Gose", "brewery": "Avery Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1487488_6616e_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 143 }, { "id": 860452, "name": "Van Dayum!", "brewery": "Blue Owl Brewing", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 144 }, { "id": 1877804, "name": "West of the Pecos", "brewery": "Big Bend Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1877804_938da_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 145 }, { "id": 53249, "name": "Pearl-Snap", "brewery": "Austin Beerworks", "image": "https://untappd.akamaized.net/site/beer_logos/beer-austinBeerworksPearlSnap.jpg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 146 }, { "id": 984946, "name": "Bloodwork Orange IPA", "brewery": "Austin Beerworks", "image": "https://untappd.akamaized.net/site/beer_logos/beer-984946_19c02_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 147 }, { "id": 867998, "name": "Oaked Mosaic IPA", "brewery": "Community Beer Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-867998_7c33e_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 148 }, { "id": 36834, "name": "All Day IPA", "brewery": "Founders Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-36834_82ca8_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 149 }, { "id": 9827, "name": "Orange Avenue Wit", "brewery": "Coronado Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-9827_f9c88_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 150 }, { "id": 1181009, "name": "Bel Air Sour", "brewery": "Brooklyn Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1181009_57fa6_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 151 }, { "id": 1390262, "name": "Guava Islander IPA", "brewery": "Coronado Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 152 }, { "id": 1197529, "name": "Suspicious Delicious", "brewery": "The Collective Brewing Project", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1197529_77b34_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 153 }, { "id": 1598201, "name": "Funky Thunder", "brewery": "The Collective Brewing Project", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1598201_89b0c_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 154 }, { "id": 342746, "name": "Mosaic IPA", "brewery": "Community Beer Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-342746_4b35a_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 155 }, { "id": 5210, "name": "Mama's Little Yella Pils", "brewery": "Oskar Blues Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-MamasLittleYellaPils_5210.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 156 }, { "id": 6155, "name": "Brooklyn Pilsner", "brewery": "Brooklyn Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-6155_67773_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 157 }, { "id": 1464471, "name": "Archetype", "brewery": "Circle Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1464471_3eb85_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 158 }, { "id": 201719, "name": "Dallas Blonde", "brewery": "Deep Ellum Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-201719_4f48b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 159 }, { "id": 5571, "name": "Brooklyn Summer Ale", "brewery": "Brooklyn Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-5571_c526e_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 160 }, { "id": 2031848, "name": "Lady Bird American IPA", "brewery": "Circle Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-2031848_17973_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 161 }, { "id": 1010547, "name": "Devil's Envy", "brewery": "Circle Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1010547_8cb71_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 162 }, { "id": 1957464, "name": "Silly Gose", "brewery": "Community Beer Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 163 }, { "id": 1654051, "name": "Wood Folk", "brewery": "The Collective Brewing Project", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1654051_d4f6a_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 164 }, { "id": 1554479, "name": "Texas Helles", "brewery": "Community Beer Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1554479_fa3de_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 165 }, { "id": 13018, "name": "Islander IPA", "brewery": "Coronado Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-13018_fd14f_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 166 }, { "id": 1966351, "name": "Leo v. Ursus: Fortem", "brewery": "Firestone Walker Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1966351_9b6d7_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 167 }, { "id": 1452078, "name": "SeaQuench Ale", "brewery": "Dogfish Head Craft Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1452078_33a60_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 168 }, { "id": 15739, "name": "Sumatra Mountain Brown", "brewery": "Founders Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-15739_cfd48_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 169 }, { "id": 74539, "name": "Pivo Pils", "brewery": "Firestone Walker Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-74539_b46db_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 170 }, { "id": 1935360, "name": "Luponic Distortion: Revolution No. 005", "brewery": "Firestone Walker Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-77672_4fca7_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 171 }, { "id": 4590, "name": "Rübæus", "brewery": "Founders Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-4590_94f44_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 172 }, { "id": 119056, "name": "Deep Ellum IPA", "brewery": "Deep Ellum Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-119056_67adc_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 173 }, { "id": 21563, "name": "Soul Doubt IPA", "brewery": "Freetail Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-21563_08579_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 174 }, { "id": 8056, "name": "90 Minute IPA", "brewery": "Dogfish Head Craft Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-8056_948fa_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 175 }, { "id": 1133245, "name": "Los Locos", "brewery": "Epic Brewing Co. (Utah, Colorado)", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1133245_3c3bc_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 176 }, { "id": 4487, "name": "Palo Santo Marron", "brewery": "Dogfish Head Craft Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-dfhPaloSantoMarron.jpg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 177 }, { "id": 1321135, "name": "Tart 'N Juicy Sour IPA", "brewery": "Epic Brewing Co. (Utah, Colorado)", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1321135_0c9cc_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 178 }, { "id": 1338289, "name": "PC Pils", "brewery": "Founders Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1338289_9d913_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 179 }, { "id": 1711213, "name": "UFO Huckleberry ", "brewery": "Harpoon Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1711213_6838f_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 180 }, { "id": 1387105, "name": "Camp Wannamango", "brewery": "Harpoon Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1387105_46b87_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 181 }, { "id": 1441255, "name": "Flesh & Blood IPA", "brewery": "Dogfish Head Craft Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1441255_8c757_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 182 }, { "id": 287127, "name": "A Pale Mosaic", "brewery": "Hops & Grain Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-287127_bb94f_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 183 }, { "id": 1736313, "name": "Bourbon Barrel Aged Imperial Stout (2016)", "brewery": "Full Sail Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1736313_bebb7_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 184 }, { "id": 5968, "name": "UFO White Ale", "brewery": "Harpoon Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-5968_6afaa_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 185 }, { "id": 2043919, "name": "Cerveza", "brewery": "Freetail Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-2043919_e73ea_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 186 }, { "id": 224620, "name": "Hijack", "brewery": "Infamous Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-224620_f6dc3_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 187 }, { "id": 1052528, "name": "Lizard of Koz", "brewery": "Founders Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1052528_bbde5_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 188 }, { "id": 533432, "name": "Sweep The Leg - Peanut Butter Stout", "brewery": "Infamous Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-533432_0c63c_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 189 }, { "id": 900662, "name": "Numb Comfort (Barrel Aged)", "brewery": "Deep Ellum Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-900662_5c125_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 190 }, { "id": 2023587, "name": "Session Cerveza", "brewery": "Full Sail Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 191 }, { "id": 1989143, "name": "Pellets & Powder IPA", "brewery": "Hops & Grain Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1989143_7eaf4_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 192 }, { "id": 1078219, "name": "Easy Peasy", "brewery": "Deep Ellum Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1078219_6656b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 193 }, { "id": 1989449, "name": "Deep Ellum Lager", "brewery": "Deep Ellum Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1989449_466a8_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 194 }, { "id": 2001282, "name": "CELLAR 3:NOUVEAU TARTE", "brewery": "Green Flash Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 195 }, { "id": 1149759, "name": "Dispensary Series: Imperial IPA", "brewery": "Hops & Grain Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1149759_4ccaa_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 196 }, { "id": 1252259, "name": "Son of A Baptist", "brewery": "Epic Brewing Co. (Utah, Colorado)", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1252259_255ce_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 197 }, { "id": 201681, "name": "Funk Metal", "brewery": "Jester King Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_201681_84017325a9e59bb97b69fe6ae498.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 198 }, { "id": 6807, "name": "Sofie", "brewery": "Goose Island Beer Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-6807_c6456_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 199 }, { "id": 1353, "name": "Goose IPA", "brewery": "Goose Island Beer Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1353_b23f2_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 200 }, { "id": 165577, "name": "The One They Call Zoe", "brewery": "Hops & Grain Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_165577_sm_914a7139a390d9669c9001053f3217.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 201 }, { "id": 1349711, "name": "787Ö2 Kölsch", "brewery": "Hops & Grain Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1349711_45cb5_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 202 }, { "id": 1130373, "name": "Passion Fruit Kicker", "brewery": "Green Flash Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1130373_e0de6_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 203 }, { "id": 1414135, "name": "Sex A Peel", "brewery": "Infamous Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1414135_03685_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 204 }, { "id": 1953210, "name": "River Beer", "brewery": "Hops & Grain Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1953210_960d6_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 205 }, { "id": 1815839, "name": "GFB", "brewery": "Green Flash Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1815839_92716_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 206 }, { "id": 13529, "name": "Lolita", "brewery": "Goose Island Beer Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-13529_96ba4_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 207 }, { "id": 1731432, "name": "Ideal Belgique", "brewery": "Green Flash Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1731432_49277_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 208 }, { "id": 6830, "name": "Backwoods Bastard", "brewery": "Founders Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-6830_66eb0_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 209 }, { "id": 18010, "name": "Rye Wit", "brewery": "Freetail Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-18010_ba79c_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 210 }, { "id": 1706096, "name": "Windows Up", "brewery": "Alpine Beer Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1706096_ebdb3_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 211 }, { "id": 1724500, "name": "La Vie En Rose (Batch 5)", "brewery": "Jester King Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_550314_sm_865fbb1fc074619796327bb64fb266.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 212 }, { "id": 1317401, "name": "Play Date", "brewery": "Deep Ellum Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1317401_4cdd8_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 213 }, { "id": 1476282, "name": "Hop Pursuit IPA", "brewery": "Full Sail Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1476282_71595_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 214 }, { "id": 9657, "name": "Big Wave Golden Ale", "brewery": "Kona Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-9657_429c5_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 215 }, { "id": 8172, "name": "Kentucky Bourbon Barrel Ale", "brewery": "Alltech Lexington Brewing & Distilling Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-8172_b2222_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 216 }, { "id": 327936, "name": "Yellow Rose", "brewery": "Lone Pint Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-327936_2c809_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 217 }, { "id": 31323, "name": "Myrcenary Double IPA", "brewery": "Odell Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-31323_b289c_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 218 }, { "id": 4509, "name": "IPA", "brewery": "Lagunitas Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-4509_1ce65_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 219 }, { "id": 1743544, "name": "Voodoo Ranger IPA", "brewery": "New Belgium Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1743544_0638d_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 220 }, { "id": 461411, "name": "Discovery", "brewery": "Meridian Hive", "image": "https://untappd.akamaized.net/site/beer_logos/beer-461411_be532_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 221 }, { "id": 273650, "name": "667 Neighbor Of The Beast", "brewery": "Lone Pint Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-273650_10f83_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 222 }, { "id": 6887, "name": "Fat Tire", "brewery": "New Belgium Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-6887_25a2f_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 223 }, { "id": 35297, "name": "Baudelaire Beer iO Saison", "brewery": "Jolly Pumpkin Artisan Ales", "image": "https://untappd.akamaized.net/site/beer_logos/beer-35297_27722_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 224 }, { "id": 1139170, "name": "Citradelic: Tangerine IPA", "brewery": "New Belgium Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1139170_ff43b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 225 }, { "id": 505383, "name": "Frontier", "brewery": "Meridian Hive", "image": "https://untappd.akamaized.net/site/beer_logos/beer-505383_82883_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 226 }, { "id": 2046318, "name": "Mr. Rogers", "brewery": "NXNW  Restaurant & Brewery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 227 }, { "id": 1530645, "name": "You May All Go To Helles, I Will Go To Texas", "brewery": "Oasis Texas Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 228 }, { "id": 555964, "name": "Seasonal Brew", "brewery": "Kona Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 229 }, { "id": 983830, "name": "Live Oak Gold", "brewery": "Live Oak Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-983830_be1f3_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 230 }, { "id": 1923206, "name": "Kentucky Bourbon Barrel Blackberry Porter", "brewery": "Alltech Lexington Brewing & Distilling Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1923206_e0bc1_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 231 }, { "id": 5280, "name": "Pilz", "brewery": "Live Oak Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-5280_d9202_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 232 }, { "id": 2031078, "name": "Cerveza de Mezquite", "brewery": "Jester King Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-2031078_ac957_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 233 }, { "id": 11266, "name": "Good Juju", "brewery": "Left Hand Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_11266_bd23ab0d0d1e68c2696008408fd0.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 234 }, { "id": 1553172, "name": "No Ka Oï", "brewery": "Jolly Pumpkin Artisan Ales", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1553172_3f52a_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 235 }, { "id": 582821, "name": "Zythophile El Dorado", "brewery": "Lone Pint Brewery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 236 }, { "id": 31791, "name": "Northern Light", "brewery": "NXNW  Restaurant & Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-31791_3b1b0_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 237 }, { "id": 5279, "name": "HefeWeizen", "brewery": "Live Oak Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-5279_2107a_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 238 }, { "id": 1428099, "name": "Dynamo", "brewery": "Meridian Hive", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1428099_10207_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 239 }, { "id": 1507, "name": "Milk Stout", "brewery": "Left Hand Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_1507_6141118d6fd37055bc992cfa5618.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 240 }, { "id": 1604713, "name": "Hanalei Island IPA", "brewery": "Kona Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1604713_bf809_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 241 }, { "id": 682206, "name": "London Homesick Ale", "brewery": "Oasis Texas Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-682206_8f2cb_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 242 }, { "id": 6725, "name": "Pils", "brewery": "Lagunitas Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-PILS_6725.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 243 }, { "id": 1962363, "name": "Kentucky Vanilla Barrel Cream Ale", "brewery": "Alltech Lexington Brewing & Distilling Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1962363_0e0df_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 244 }, { "id": 531123, "name": "Stonelake IPA", "brewery": "NXNW  Restaurant & Brewery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 245 }, { "id": 1954331, "name": "Fair Voyage", "brewery": "Jester King Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1954331_ea0da_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 246 }, { "id": 2053406, "name": "Supermodern", "brewery": "Oasis Texas Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 247 }, { "id": 45245, "name": "The Waldos' Special Ale", "brewery": "Lagunitas Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-45245_2897d_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 248 }, { "id": 28, "name": "IPA", "brewery": "Odell Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-odell-IPA.jpg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 249 }, { "id": 2025464, "name": "Travelin' Light Kolsch", "brewery": "Left Hand Brewing Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 250 }, { "id": 179169, "name": "Sobrehumano Palena ‘ole", "brewery": "Jolly Pumpkin Artisan Ales", "image": "https://untappd.akamaized.net/site/beer_logos/beer-SobrehumanoPalenaole_179169.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 251 }, { "id": 208, "name": "90 Shilling", "brewery": "Odell Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-odell90-Shilling.jpg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 252 }, { "id": 1995779, "name": "Saison Au Miel", "brewery": "Left Hand Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1995779_a64dd_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 253 }, { "id": 245695, "name": "The Meddler Oud Bruin", "brewery": "Odell Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_245695_af44ce91b35fa6b17b40e9154966.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 254 }, { "id": 1133280, "name": "Shiner Strawberry Blonde", "brewery": "Spoetzl Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1133280_ac901_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 255 }, { "id": 1740374, "name": "Samuel Adams Rebel Juiced IPA", "brewery": "Boston Beer Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1740374_2649d_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 256 }, { "id": 1415165, "name": "Sweet Sunny South", "brewery": "Sierra Nevada Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1415165_98779_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 257 }, { "id": 692371, "name": "Grapefruit and Chill", "brewery": "Schilling Cider", "image": "https://untappd.akamaized.net/site/beer_logos/beer-692371_f891b_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 258 }, { "id": 1695697, "name": "Sidecar Orange Pale Ale", "brewery": "Sierra Nevada Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1695697_ccc11_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 259 }, { "id": 1803887, "name": "Cherry Chocolate Stout", "brewery": "Sierra Nevada Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1803887_2bcfb_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 260 }, { "id": 1560810, "name": "Raspberry AF", "brewery": "Saint Arnold Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1560810_3be05_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 261 }, { "id": 4488, "name": "Shiner Bock", "brewery": "Spoetzl Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-4488_3b1ec_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 262 }, { "id": 1741133, "name": "Tropical Torpedo", "brewery": "Sierra Nevada Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1741133_0a236_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 263 }, { "id": 3916, "name": "Samuel Adams Summer Ale", "brewery": "Boston Beer Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-_3916_sm_2a69f4a012bc330ad111bc2e508cc6.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 264 }, { "id": 1876872, "name": "Shiner Berliner Weisse", "brewery": "Spoetzl Brewery", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 265 }, { "id": 263666, "name": "Narwhal Imperial Stout", "brewery": "Sierra Nevada Brewing Co.", "image": "https://untappd.akamaized.net/site/beer_logos/beer-263666_cf1b2_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 266 }, { "id": 2057859, "name": "Passport Pineapple Passionfruit", "brewery": "Schilling Cider", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 267 }, { "id": 1720311, "name": "Shiner Homespun", "brewery": "Spoetzl Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1720311_b8537_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 268 }, { "id": 2032144, "name": "Wild Child", "brewery": "Boston Beer Company", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 269 }, { "id": 41501, "name": "Shiner Ruby Redbird", "brewery": "Spoetzl Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-41501_d73a2_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 270 }, { "id": 39912, "name": "Shiner Light Blonde", "brewery": "Spoetzl Brewery", "image": "https://untappd.akamaized.net/site/beer_logos/beer-ShinerLightBlonde_39912.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 271 }, { "id": 1187761, "name": "Art Car IPA", "brewery": "Saint Arnold Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1187761_6c454_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 272 }, { "id": 2050573, "name": "Emerald City Blackberry Pear", "brewery": "Schilling Cider", "image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 273 }, { "id": 1899130, "name": "Pub Crawl", "brewery": "Saint Arnold Brewing Company", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1899130_cafd9_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 274 }, { "id": 1652170, "name": "Stone Ripper", "brewery": "Stone Brewing", "image": "https://untappd.akamaized.net/site/beer_logos/beer-1652170_0a575_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 275 }, { "id": 707667, "name": "London Dry", "brewery": "Schilling Cider", "image": "https://untappd.akamaized.net/site/beer_logos/beer-707667_74237_sm.jpeg", "rating": 0, "isCheckedIn": false, "isOpen": false, "checked": false, "isFavorite": false, "bucket": 0, "index": 276 }]], "checkCount": 0 };
exports.default = index;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: 'render',
    value: function render() {
      var classes = 'notification';
      if (this.props.data.type === 'error') {
        classes += ' error';
      }
      return _react2.default.createElement(
        'span',
        { className: classes },
        this.props.data.text
      );
    }
  }]);

  return Notification;
}(_react.Component);

exports.default = Notification;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".notification {\n  display: block;\n  padding: 10px;\n}\n.notification.error {\n  background-color: var(--negative);\n}", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(11);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { className: 'search', onSubmit: this.props.handleSubmit, noValidate: true },
        _react2.default.createElement('input', { className: 'search-field', type: 'text', name: this.props.inputName, placeholder: this.props.placeholder }),
        _react2.default.createElement(
          'button',
          { className: 'search-btn btn btn--positive', type: 'submit' },
          'Submit'
        )
      );
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var options = this.props.options.map(function (name) {
        return _react2.default.createElement(
          'option',
          { key: name, value: name },
          name
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'select' },
        _react2.default.createElement(
          'label',
          { className: 'select-label', htmlFor: this.props.id },
          this.props.label
        ),
        _react2.default.createElement(
          'select',
          { className: 'select-select', onChange: this.props.handleChange, name: this.props.id, id: this.props.id },
          options
        )
      );
    }
  }]);

  return Select;
}(_react.Component);

exports.default = Select;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".select {\n  position: relative;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n}\n.select:after {\n  content: '';\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-right: 2px solid var(--positive);\n  border-bottom: 2px solid var(--positive);\n  transform: translateY(-3px) rotate(45deg);\n  position: absolute;\n  right: 15px;\n  top: 0px;\n  bottom: 0px;\n  margin: auto;\n}\n.select-label {\n  margin-right: 10px;\n}\n.select-select {\n  border-radius: 0;\n  background: white;\n  padding: 10px;\n  border: none;\n  box-shadow: none;\n  min-width: 150px;\n  -webkit-appearance: none;\n  font-size: var(--fs-input);\n  flex: 1;\n}", ""]);

// exports


/***/ })
/******/ ]);