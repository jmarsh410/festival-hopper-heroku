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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsCookie = __webpack_require__(25);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function getAccessToken() {
  return _jsCookie2.default.get('untappd_access_token');
}

var utils = {
  generateId: function generateId(size) {
    var idSize = typeof size !== 'number' ? size : 5;
    var value = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var length = chars.length;
    for (var i = 0; i < idSize; i += 1) {
      value += chars.charAt(Math.floor(Math.random() * length));
    }
    return value;
  },

  getAccessToken: getAccessToken,
  normalizeBreweryBeers: normalizeBreweryBeers,
  generateCheckInUrl: function generateCheckInUrl() {
    return 'https://api.untappd.com/v4/checkin/add?access_token=' + getAccessToken();
  },

  // lists the beers that a brewery has
  generateBreweryInfoUrl: function generateBreweryInfoUrl(breweryId) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    // brewery/beer_list/BREWERY_ID
    // there is an undocumented api endpoint that the untappd website uses
    // which can be used to get a brewery's beers
    // this endpoint is subject to removal/changes since it is undocumented
    return 'https://api.untappd.com/v4/brewery/beer_list/' + breweryId + '?access_token=' + getAccessToken() + '&offset=' + offset;

    // documented api call https://untappd.com/api/docs#breweryinfo
    // return 'https://api.untappd.com/v4/brewery/info/'+ breweryId + '?access_token=' + getAccessToken();
  },

  // lists breweries that match the search term
  generateBrewerySearchUrl: function generateBrewerySearchUrl(breweryName) {
    return 'https://api.untappd.com/v4/search/brewery/?access_token=' + getAccessToken() + '&q=' + breweryName + '&limit=50';
  },
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
  },
  removeClientCookie: function removeClientCookie(name) {
    _jsCookie2.default.remove('untappd_access_token');
  },
  isClientSide: function isClientSide() {
    return typeof window !== 'undefined';
  }
};

exports.default = utils;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".btn {\n  box-sizing: border-box;\n  padding: 10px;\n  color: white;\n  background-color: black;\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  border-radius: 0px;\n}\n.btn--block {\n  display: block;\n}\n.btn--positive {\n  background-color: var(--positive);\n}\n.btn--connect {\n  text-transform: uppercase;\n}\n.btn-checkIn {\n  position: fixed;\n  bottom: 15px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100px;\n  background-color: var(--positive);\n  border-radius: 20px;\n  color: white;\n  box-shadow: 0 0 10px 0 var(--positive);\n  border: 1px solid var(--positive);\n}\n", ""]);

// exports


/***/ }),
/* 6 */
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

__webpack_require__(23);

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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

__webpack_require__(29);

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

__webpack_require__(30);

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
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

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

var _header = __webpack_require__(14);

var _header2 = _interopRequireDefault(_header);

var _nav = __webpack_require__(16);

var _nav2 = _interopRequireDefault(_nav);

var _login = __webpack_require__(18);

var _login2 = _interopRequireDefault(_login);

var _categories = __webpack_require__(22);

var _categories2 = _interopRequireDefault(_categories);

var _brewerySearch = __webpack_require__(27);

var _brewerySearch2 = _interopRequireDefault(_brewerySearch);

var _beerListContainer = __webpack_require__(32);

var _beerListContainer2 = _interopRequireDefault(_beerListContainer);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const urlParameter = '#access_token=';
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
      // be aware that this method won't work if there is any other information in the url 
      // after the access_token. though if access_token exists, it would always be alone 
      // since this would be right after authenticating    
      if (typeof localStorage !== 'undefined') {
        // localstorage won't exist on the server
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
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_reactRouterDom.Route, {
          path: '/',
          children: function children(props) {
            return (
              // used the children render method because it always gets
              // called regardless of current route/location
              props.location.pathname !== '/login' ? _react2.default.createElement(_nav2.default, null) : null
            );
          }
        }),
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/',
            render: function render() {
              return _this2.authenticate() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/curated' }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/logout',
            render: function render() {
              // delete the user's access token cookie
              if (_utils2.default.isClientSide()) {
                _utils2.default.removeClientCookie('untappd_access_token');
              }
              return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/curated',
            render: function render(_ref) {
              var staticContext = _ref.staticContext;

              if (staticContext && staticContext.data && staticContext.data.categories) {
                // during SSR, pass in category data directly
                return _react2.default.createElement(_categories2.default, { items: staticContext.data.categories });
              }
              return _react2.default.createElement(_categories2.default, null);
            }
          }),
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(15);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".header {\n  margin-bottom: 0px;\n  padding: 10px;\n  color: white;\n  background-color: var(--dark-green);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header a {\n  text-decoration: none;\n  color: white;\n}\n.header a:visited {\n  color: white;\n}\n.header-logo {\n  font-size: var(--fs-l);\n  font-family: var(--title-font-family);\n}\n.header-logout {\n  color: white;\n}\n.header-logout:visited,\n.header-logout:active,\n.header-logout:focus {\n  color: white;\n}", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(17);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".nav ul {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.nav li:not(:last-child) {\n  border-right: 1px solid var(--dark);\n}\n.nav li {\n  padding: 20px;\n  flex: 1;\n  text-align: center;\n  background: var(--medium);\n}\n.nav a {\n  color: var(--text-light);\n  text-decoration: none;\n}\n.nav a.selected {\n  text-decoration: underline;\n}", ""]);

// exports


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

var _buttonAnchor = __webpack_require__(19);

var _buttonAnchor2 = _interopRequireDefault(_buttonAnchor);

__webpack_require__(20);

var _pbu_40_black = __webpack_require__(21);

var _pbu_40_black2 = _interopRequireDefault(_pbu_40_black);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */

var authURL = 'https://untappd.com/oauth/authenticate/?client_id=B37286DA6E41C3C75634F4C0DB726E889052525C&response_type=code&redirect_url=https://festival-hopper.herokuapp.com';

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(5);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".login {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 10px;\n  background-color: var(--x-light);\n  max-width: 250px;\n  text-align: center;\n  color: var(--text-dark);\n}\n.login-title {\n  margin: 0 0 10px;\n}\n.login p {\n  margin: 30px 0;\n}\n.login-attribution {\n  max-width: 100px;\n}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "458bbea78cc5bcb19cb3e7184c290db2.png";

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

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _list = __webpack_require__(6);

var _list2 = _interopRequireDefault(_list);

var _category = __webpack_require__(24);

var _category2 = _interopRequireDefault(_category);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// css


var Categories = function (_Component) {
  _inherits(Categories, _Component);

  function Categories(props) {
    _classCallCheck(this, Categories);

    var _this = _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).call(this, props));

    var items = void 0;
    // if items were specifically passed in, use them
    if (_this.props.items.length > 0) {
      items = _this.props.items;
    } else if (_utils2.default.isClientSide() && window && window.appData && window.appData.categories) {
      // look for items stored in appData
      items = window.appData.categories;
    } else {
      items = [];
    }
    _this.state = {
      items: items
    };
    return _this;
  }

  _createClass(Categories, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (_utils2.default.isClientSide() && this.state.items < 1) {
        var url = 'http://' + document.location.host + '/api/curated-lists';
        fetch(url).then(function (response) {
          if (response.status !== 200) {
            console.error('could not get curated lists');
          }
          return response.json();
        }).then(function (json) {
          _this2.items = json;
          console.log(json);
          _this2.setState({ items: json });
        }).catch(function (err) {
          console.log('something went wrong with the categories fetch');
          console.log(err);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.items.length < 1) {
        return _react2.default.createElement(
          'div',
          null,
          '...loading'
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'categories' },
        _react2.default.createElement(_list2.default, { items: this.state.items, type: _category2.default, title: 'Curated Lists' })
      );
    }
  }]);

  return Categories;
}(_react.Component);

Categories.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

Categories.defaultProps = {
  items: []
};

exports.default = Categories;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".list-title {\n  font-family: var(--title-font-family);\n  text-align: center;\n}\n.list-main {\n  /*background-color: #eee;*/\n  margin: 0;\n  padding: 0;\n}\n.list-item {\n  background-color: transparent;\n  list-style: none;\n  margin: 0 0 0px;\n  padding: 0;\n  border-bottom: 1px solid var(--gray);\n}\n.list-item:last-child {\n  border-bottom: none;\n}\n.list-item:last-child > * {\n  margin-bottom: 0;\n}", ""]);

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
      var id = '/curated/' + this.props.data.id;
      return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: {
            pathname: id
          }, className: 'category' },
        _react2.default.createElement(
          'div',
          { className: 'category-image' },
          _react2.default.createElement('img', { src: this.props.data.image, alt: this.props.data.name })
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
/* 25 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".categories-separator {\n  text-align: center;\n  margin: 20px 0;\n}", ""]);

// exports


/***/ }),
/* 27 */
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

var _list = __webpack_require__(6);

var _list2 = _interopRequireDefault(_list);

var _brewery = __webpack_require__(28);

var _brewery2 = _interopRequireDefault(_brewery);

var _modal = __webpack_require__(9);

var _modal2 = _interopRequireDefault(_modal);

var _loadingSpinner = __webpack_require__(10);

var _loadingSpinner2 = _interopRequireDefault(_loadingSpinner);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(31);

__webpack_require__(11);

__webpack_require__(5);

__webpack_require__(12);

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
        console.log(searchUrl);
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".modalContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: rgba(0,0,0,.7);\n}\n.modalClose {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  height: 15px;\n  width: 15px;\n  cursor: pointer;\n}\n.modalClose:before,\n.modalClose:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  height: 3px;\n  width: 100%;\n  background: var(--dark);\n  transform-origin: 50% 50%;\n  transform: translateY(-50%) rotate(45deg);\n}\n.modalClose:after {\n  transform: translateY(-50%) rotate(-45deg);\n}\n.modalContent {\n  z-index: 1;\n  position: absolute;\n  height: 80vh;\n  width: 80vw;\n  max-height: 500px;\n  max-width: 300px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: white;\n  box-shadow: 0 0 5px 0 #000;\n  border-radius: 5px;\n  padding: 30px;\n  box-sizing: border-box;\n  overflow: scroll;\n}", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loadingSpinner {\n  animation: 1s infinite spin;\n  background-color: transparent;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: 10px auto;\n  box-shadow: inset 0 0 0 4px var(--light-gray);\n}\n.loadingSpinner--centered {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.loadingSpinner:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border-radius: 50%;\n  border: 4px solid transparent;\n  border-left-color: var(--green);\n}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".brewerySearch {\n  margin-top: 4%;\n}", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(12);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _beer = __webpack_require__(33);

var _beer2 = _interopRequireDefault(_beer);

var _beerListControls = __webpack_require__(37);

var _beerListControls2 = _interopRequireDefault(_beerListControls);

var _list = __webpack_require__(6);

var _list2 = _interopRequireDefault(_list);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

var _loadingSpinner = __webpack_require__(10);

var _loadingSpinner2 = _interopRequireDefault(_loadingSpinner);

var _modal = __webpack_require__(9);

var _modal2 = _interopRequireDefault(_modal);

var _notification = __webpack_require__(39);

var _notification2 = _interopRequireDefault(_notification);

var _search = __webpack_require__(41);

var _search2 = _interopRequireDefault(_search);

var _select = __webpack_require__(42);

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
      list: { id: null, name: null, beers: null, checkCount: 0, totalCount: 0 },
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
    value: function handleScroll() {
      // if this is the bottom of the page, then see if theres more items to be loaded
      var bottomOfPage = window.innerHeight + window.pageYOffset === document.body.scrollHeight;
      var moreItemsNeedLoaded = this.state.list.maxItems > this.state.list.beerCount;
      if (bottomOfPage && moreItemsNeedLoaded) {
        this.fetchBeersFromUntappd(true);
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
    key: 'fetchBeersFromUntappd',
    value: function fetchBeersFromUntappd(add) {
      var _this2 = this;

      var self = this;
      // this.state.list.beers is an array of arrays
      var bucketNum = add ? this.state.list.beers.length : 0;
      var apiOffset = add ? bucketNum * this.defaultListSize : 0;
      this.clearNotifications();
      this.showLoadingSpinner();
      console.log('isClientSide: ' + _utils2.default.isClientSide());
      console.log(fetch);
      fetch(this.apiEndpoint(this.listId, apiOffset)).then(function (response) {
        if (response.status !== 200) {
          self.addNotification({ id: _utils2.default.generateId(), text: 'Error: Server responded with status code of ' + response.status, type: 'error' });
          return new Error('The server responded with a status code of ' + response.status);
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
      var _this3 = this;

      // check localStorage for this list's beers
      if (localStorage[this.listId] && !_lodash2.default.isEmpty(localStorage[this.listId])) {
        this.updateList(JSON.parse(localStorage[this.listId]));
      } else {
        // list isn't found in storage, make a fetch request for it
        // check whether this is a curated list or a list that needs an api call
        if (this.listType === 'curated') {
          // request the curated list from Festival Hopper's database
          fetch('http://' + document.location.host + '/api/beer-list/curated?listid=' + this.listId).then(function (response) {
            if (response.status !== 200) {
              console.error('could not get curated list');
            }
            return response.json();
          }).then(function (json) {
            _this3.updateList(json);
          }).catch(function (err) {
            console.error(error);
          });
        } else {
          // if this list hasn't been saved, get it
          this.fetchBeersFromUntappd();
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
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (_utils2.default.isClientSide()) {
        // add a scroll event listener
        window.addEventListener('scroll', this.handleScroll);
      }
      this.getInitialBeers();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (_utils2.default.isClientSide()) {
        // add a scroll event listener
        window.removeEventListener('scroll', this.handleScroll);
      }
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

BeerListContainer.propTypes = {
  match: _propTypes2.default.shape({
    params: _propTypes2.default.object,
    isExact: _propTypes2.default.bool,
    path: _propTypes2.default.string,
    url: _propTypes2.default.string
  }),
  location: _propTypes2.default.shape({
    key: _propTypes2.default.string,
    pathname: _propTypes2.default.string,
    search: _propTypes2.default.string,
    hash: _propTypes2.default.string,
    state: _propTypes2.default.object
  })
};

BeerListContainer.defaultProps = {
  match: {},
  location: {}
};

exports.default = BeerListContainer;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _checkbox = __webpack_require__(34);

var _checkbox2 = _interopRequireDefault(_checkbox);

__webpack_require__(36);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".checkbox {\n  position: relative;\n}\n.checkbox-input {\n  opacity: 0;\n  display: block;\n  width: 25px;\n  height: 25px;\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n}\n.checkbox-vis {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n}\n.checkbox--normal .checkbox-vis {\n  background-color: #ccc;\n}\n.checkbox--normal .checkbox-vis:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  display: block;\n  width: 6px;\n  height: 12px;\n  border: solid #000;\n  border-width: 0 4px 4px 0;\n  transform: translateY(-2px) rotate(45deg);\n  transition: .1s opacity ease;\n  opacity: 0;\n}\n.checkbox--normal .checkbox-input[data-checked=\"true\"] + .checkbox-vis:before,\n.checkbox--normal .checkbox-input[data-checked=\"true\"] + .checkbox-vis:before {\n  opacity: 1;\n}\n.checkbox--favorite .checkbox-vis {\n  background-color: var(--gray);\n  height: 12px;\n  width: 12px;\n  margin: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transform: rotate(-45deg);\n}\n.checkbox--favorite .checkbox-vis:before,\n.checkbox--favorite .checkbox-vis:after {\n  content: \"\";\n  background-color: var(--gray);\n  border-radius: 50%;\n  height: 12px;\n  position: absolute;\n  width: 12px;\n}\n.checkbox--favorite .checkbox-vis:before {\n  top: -6px;\n  left: 0;\n}\n.checkbox--favorite .checkbox-vis:after {\n  left: 6px;\n  top: 0;\n}\n.checkbox--favorite .checkbox-input[data-checked=\"true\"] + .checkbox-vis,\n.checkbox--favorite .checkbox-input[data-checked=\"true\"] + .checkbox-vis:before,\n.checkbox--favorite .checkbox-input[data-checked=\"true\"] + .checkbox-vis:after {\n  background-color: var(--positive);\n}\n.checkbox--arrow .checkbox-vis {\n  background-color: transparent;\n}\n.checkbox--arrow .checkbox-vis:before {\n  content: '';\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-right: 2px solid var(--positive);\n  border-bottom: 2px solid var(--positive);\n  transform: translateY(-4px) rotate(45deg);\n  transform-origin: 50% 50%;\n  transition: .3s all ease;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.checkbox--arrow .checkbox-input[data-checked=\"true\"] + .checkbox-vis:before {\n  transform: rotate(225deg);\n}", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".beers {\n  margin-bottom: 100px;\n}\n/*.beer.checkedIn {\n  opacity: .5;\n}*/\n.beer {\n  background-color: var(--gray);\n}\n.beer-main {\n  display: block;\n  padding: 20px;\n  background-color: #ddd;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none;\n  color: black;\n}\n.beer-image {\n  width: 50px;\n  height: 50px;\n  background-color: #ccc;\n}\n.beer-image img {\n  width: 100%;\n}\n.beer-info {\n  flex: 1;\n  margin: 0 10px;\n}\n.beer-actions {\n  display: flex;\n  align-items: center;\n}\n.beer-actions > * {\n  margin-left: 10px;\n}\n/*move this into a separate module*/\n.beer-checkbox {\n  max-height: 25px;\n}\n.checkedIn .beer-checkbox .checkbox-vis {\n  background-color: transparent;\n}\n.checkedIn .beer-checkbox .checkbox-input:checked + .checkbox-vis:before {\n  border-width: 4px;\n  border-radius: 50%;\n  width: 12px;\n  border-color: var(--light-green);\n  transform: translateY(0px);\n}\n.beer-drawer {\n  overflow:hidden;\n  max-height: 0px;\n  box-sizing: border-box;\n  transition: .3s max-height linear;\n}\n.beer.open .beer-drawer {\n  max-height: 300px;\n}\n.beer-drawerInner {\n  padding: 20px;\n}\n.beer-description {\n  width: 100%;\n  max-width: 100%;\n  min-height: 50px;\n  max-height: 100px;\n  margin-bottom: 10px;\n}\n.beer-rating {\n  display: flex;\n}\n.beer-slider {\n  flex: 1;\n}\n.beer-sliderValue {\n  padding: 10px;\n  background-color: #eee;\n  margin-left: 10px;\n  min-width: 55px;\n  text-align: center;\n  box-sizing: border-box;\n}", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(38);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".beerListControls {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 10px;\n  background: var(--light-gray);\n  border-bottom: 1px solid var(--gray);\n}\n/*.beerListControls > * {\n  margin: 5px;\n}*/\n.beerListControls .search {\n  flex: 1 1 51%;\n  margin-bottom: 10px;\n}\n.beerListControls .select {\n  flex: 1 1 51%;\n}\n/*@media screen and (min-width:700px) {\n  .beerListControls .select {\n    padding-left: 20px;\n  }\n}*/", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(40);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".notification {\n  display: block;\n  padding: 10px;\n}\n.notification.error {\n  background-color: var(--negative);\n}", ""]);

// exports


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

__webpack_require__(11);

__webpack_require__(5);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(43);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".select {\n  position: relative;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n}\n.select:after {\n  content: '';\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-right: 2px solid var(--positive);\n  border-bottom: 2px solid var(--positive);\n  transform: translateY(-3px) rotate(45deg);\n  position: absolute;\n  right: 15px;\n  top: 0px;\n  bottom: 0px;\n  margin: auto;\n}\n.select-label {\n  margin-right: 10px;\n}\n.select-select {\n  border-radius: 0;\n  background: white;\n  padding: 10px;\n  border: none;\n  box-shadow: none;\n  min-width: 150px;\n  -webkit-appearance: none;\n  font-size: var(--fs-input);\n  flex: 1;\n}", ""]);

// exports


/***/ })
/******/ ]);