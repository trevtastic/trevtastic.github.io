/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/app/home/app.js":
/*!************************************!*\
  !*** ./src/client/app/home/app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var Shared_react_views_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/react/views/home */ "./src/shared/react/views/home/index.js");
/* harmony import */ var Shared_react_views_home_coming_soon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/react/views/home/coming-soon */ "./src/shared/react/views/home/coming-soon.js");
/* harmony import */ var Shared_react_views_errors_nomatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/react/views/errors/nomatch */ "./src/shared/react/views/errors/nomatch.js");
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\client\\app\\home\\app.js";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */





/**
 * Declare private properties
 * @private
 */

/**
 * The server-side app component.
 * 
 * @since 1.0.0
 * 
 * @access public
 * @param  {object} props The component props.
 * @return {object}
 */

function App(props) {
  // Refs
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  /**
   * Handle component lifecycle
   * 
   * componentDidMount? componentWillUnmount?
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {// componentDidMount
  }, []);
  /**
   * Handle component lifecycle
   * 
   * componentDidUpdate?
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {// componentDidUpdate
    }
  });
  /**
   * Render component
   * 
   * @return object
   */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Shared_react_views_home__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Shared_react_views_home_coming_soon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 27
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Shared_react_views_errors_nomatch__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 30
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  })));
}
/**
 * Module exports
 * @public
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/client/app/home/index.js":
/*!**************************************!*\
  !*** ./src/client/app/home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/client/app/index.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/client/app/home/app.js");
/* harmony import */ var Scss_bootstrap_4_home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Scss/bootstrap-4/home.scss */ "./src/client/scss/bootstrap-4/home.scss");
/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */




/**
 * Declare private properties
 * @private
 */

const DATA_KEY = 'promvc.app';
let initialised = false;
/**
 * The client-side home app.
 * 
 * @since 1.0.0
 */

class ReactApp {
  constructor(element) {
    this._element = element;
  }

  render(type) {
    if (initialised) return;
    type = type || 'react'; // Render app

    const entry = new _index_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

    switch (type) {
      case 'react':
        entry.renderReactApp(_app_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
        initialised = true;
        break;

      default:
        console.error('No valid initialization key given.');
    }
  } // static


  static _jQueryInterface(config) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

      if (!data) {
        data = new ReactApp(this);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
      }

      if (config === 'render') {
        data[config]('react');
      }
    });
  }

}
/**
 * --------------------
 * Application Load
 * --------------------
 */


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').each(function () {
    const $wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

    ReactApp._jQueryInterface.call($wrapper, 'render');
  });
});

/***/ }),

/***/ "./src/client/app/index.js":
/*!*********************************!*\
  !*** ./src/client/app/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var Shared_react_constants_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/react/constants/defaults */ "./src/shared/react/constants/defaults.js");
/* harmony import */ var Shared_util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/util/helpers */ "./src/shared/util/helpers/index.js");
/* harmony import */ var Shared_react_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Shared/react/context */ "./src/shared/react/context/index.js");
/* harmony import */ var Shared_react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Shared/react/redux */ "./src/shared/react/redux/index.js");
/* harmony import */ var Scss_bootstrap_4_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Scss/bootstrap-4/main.scss */ "./src/client/scss/bootstrap-4/main.scss");
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\client\\app\\index.js";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */







 // import * as serviceWorker from 'Workers/service';
// import { serviceWorkerConfig } from 'Util';


/**
 * Declare private properties
 * @private
 */

const NAME = 'promvc_app';
const VERSION = '1.0.0';
/**
 * The client-side app entry.
 * 
 * @since 1.0.0
 */

class AppEntry {
  constructor() {
    this._context = window.promvc != undefined ? window.promvc.context : {}; // init

    this.init();
  } // getters


  get NAME() {
    return NAME;
  }

  get VERSION() {
    return VERSION;
  }

  init() {
    // Handle UI theme switching
    Shared_util_helpers__WEBPACK_IMPORTED_MODULE_4__.EventLoader.themeSwitch();
  }

  renderReactApp(App, basename) {
    const initialState = localStorage[Shared_react_constants_defaults__WEBPACK_IMPORTED_MODULE_3__.contextKey] ? JSON.parse(localStorage[Shared_react_constants_defaults__WEBPACK_IMPORTED_MODULE_3__.contextKey]) : (0,Shared_react_context__WEBPACK_IMPORTED_MODULE_5__["default"])(this._context);
    const store = (0,Shared_react_redux__WEBPACK_IMPORTED_MODULE_6__.configureStore)(initialState); // create state cookie

    const saveState = () => {
      localStorage[Shared_react_constants_defaults__WEBPACK_IMPORTED_MODULE_3__.contextKey] = JSON.stringify(store.getState());
    };

    store.subscribe(saveState); // error handling

    const handleError = error => {
      store.dispatch((0,Shared_react_redux__WEBPACK_IMPORTED_MODULE_6__.addError)(error.message));
    };

    window.addEventListener('error', handleError); // add globals - debug

    window.React = react__WEBPACK_IMPORTED_MODULE_0__;
    window.store = store; // base url

    basename = basename || ''; // render application

    react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, {
      basename: basename,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }
    })))), document.getElementById('appMountPoint')); // register service worker
    // serviceWorker.register( serviceWorkerConfig );
  }

}
/**
 * Module exports
 * @public
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppEntry);

/***/ }),

/***/ "./src/shared/react/components/icons/brand/logo-jam.js":
/*!*************************************************************!*\
  !*** ./src/shared/react/components/icons/brand/logo-jam.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoJam": () => (/* binding */ LogoJam)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\shared\\react\\components\\icons\\brand\\logo-jam.js";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * The svg component.
 * 
 * @since 1.0.0
 */

function LogoJam(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "logo-jam",
    viewBox: "0 0 140 171",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M140,0L0,0L0,140L140,140L140,0ZM72,11.95L72,21.95L68,21.95L68,11.95L11.95,11.95L11.95,68L21.95,68L21.95,72L11.95,72L11.95,127.95L68,127.95L68,117.95L72,117.95L72,127.95L127.95,127.95L127.95,72L117.95,72L117.95,68L127.95,68L127.95,11.95L72,11.95Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M69.101,90.632C65.93,90.632 63.059,90.12 60.488,89.095C57.917,88.07 55.8,86.572 54.137,84.6L61.503,75.9C62.586,77.253 63.649,78.259 64.693,78.916C65.737,79.573 66.82,79.902 67.941,79.902C69.372,79.902 70.464,79.477 71.218,78.626C71.972,77.775 72.349,76.519 72.349,74.856L72.349,59.428L58.545,59.428L58.545,49.104L85.863,49.104L85.863,74.044C85.863,79.573 84.442,83.72 81.6,86.485C78.758,89.25 74.592,90.632 69.101,90.632Z",
    style: "fill-rule:nonzero;",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M4.336,171C3.576,171 2.873,170.835 2.227,170.506C1.581,170.177 1.055,169.708 0.65,169.1L1.486,168.15C2.221,169.239 3.177,169.784 4.355,169.784C6.002,169.784 6.825,168.809 6.825,166.858L6.825,158.802L1.961,158.802L1.961,157.586L8.212,157.586L8.212,166.801C8.212,168.194 7.886,169.243 7.233,169.946C6.581,170.648 5.615,171 4.336,171Z",
    style: "fill-rule:nonzero;",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M24.286,167.333L16.876,167.333L15.28,170.886L13.817,170.886L19.897,157.586L21.284,157.586L27.364,170.886L25.882,170.886L24.286,167.333ZM23.773,166.193L20.581,159.049L17.389,166.193L23.773,166.193Z",
    style: "fill-rule:nonzero;",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M47.181,157.586L47.181,170.886L45.832,170.886L45.832,160.246L40.607,169.195L39.942,169.195L34.717,160.303L34.717,170.886L33.368,170.886L33.368,157.586L34.527,157.586L40.303,167.447L46.022,157.586L47.181,157.586Z",
    style: "fill-rule:nonzero;",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M67.758,171C66.77,171 65.823,170.842 64.917,170.525C64.012,170.208 63.312,169.79 62.818,169.271L63.369,168.188C63.85,168.669 64.49,169.059 65.288,169.356C66.086,169.654 66.909,169.803 67.758,169.803C68.949,169.803 69.842,169.585 70.437,169.148C71.032,168.711 71.33,168.144 71.33,167.447C71.33,166.915 71.168,166.491 70.845,166.174C70.522,165.857 70.127,165.613 69.658,165.443C69.189,165.272 68.537,165.085 67.701,164.882C66.7,164.629 65.902,164.385 65.307,164.151C64.712,163.916 64.202,163.558 63.777,163.077C63.353,162.596 63.141,161.943 63.141,161.12C63.141,160.449 63.318,159.838 63.673,159.287C64.028,158.736 64.572,158.295 65.307,157.966C66.042,157.637 66.954,157.472 68.043,157.472C68.803,157.472 69.547,157.576 70.275,157.785C71.004,157.994 71.634,158.283 72.166,158.65L71.691,159.771C71.134,159.404 70.538,159.128 69.905,158.945C69.272,158.761 68.651,158.669 68.043,158.669C66.878,158.669 66,158.894 65.411,159.344C64.822,159.793 64.528,160.373 64.528,161.082C64.528,161.614 64.689,162.041 65.012,162.365C65.335,162.688 65.741,162.934 66.228,163.106C66.716,163.277 67.372,163.463 68.195,163.666C69.17,163.907 69.959,164.144 70.56,164.379C71.162,164.613 71.672,164.968 72.09,165.443C72.508,165.918 72.717,166.56 72.717,167.371C72.717,168.042 72.536,168.654 72.175,169.205C71.814,169.755 71.26,170.193 70.513,170.516C69.766,170.838 68.847,171 67.758,171Z",
    style: "fill-rule:nonzero;",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M81.97,158.802L77.296,158.802L77.296,157.586L88.05,157.586L88.05,158.802L83.376,158.802L83.376,170.886L81.97,170.886L81.97,158.802Z",
    style: "fill-rule:nonzero;",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M101.768,167.333L94.358,167.333L92.762,170.886L91.299,170.886L97.379,157.586L98.766,157.586L104.846,170.886L103.364,170.886L101.768,167.333ZM101.255,166.193L98.063,159.049L94.871,166.193L101.255,166.193Z",
    style: "fill-rule:nonzero;",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M116.436,171C115.119,171 113.931,170.709 112.873,170.126C111.816,169.543 110.986,168.736 110.384,167.704C109.783,166.671 109.482,165.515 109.482,164.236C109.482,162.957 109.783,161.801 110.384,160.769C110.986,159.736 111.819,158.929 112.883,158.346C113.947,157.763 115.138,157.472 116.455,157.472C117.443,157.472 118.355,157.637 119.191,157.966C120.027,158.295 120.736,158.777 121.319,159.41L120.426,160.303C119.387,159.252 118.076,158.726 116.493,158.726C115.442,158.726 114.485,158.967 113.624,159.448C112.763,159.929 112.088,160.588 111.6,161.424C111.113,162.26 110.869,163.197 110.869,164.236C110.869,165.275 111.113,166.212 111.6,167.048C112.088,167.884 112.763,168.543 113.624,169.024C114.485,169.505 115.442,169.746 116.493,169.746C118.089,169.746 119.4,169.214 120.426,168.15L121.319,169.043C120.736,169.676 120.024,170.161 119.181,170.497C118.339,170.832 117.424,171 116.436,171Z",
    style: "fill-rule:nonzero;",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M132.244,164.635L129.527,167.39L129.527,170.886L128.121,170.886L128.121,157.586L129.527,157.586L129.527,165.623L137.336,157.586L138.951,157.586L133.194,163.609L139.35,170.886L137.678,170.886L132.244,164.635Z",
    style: "fill-rule:nonzero;",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  })));
}
/**
 * Module exports
 */




/***/ }),

/***/ "./src/shared/react/components/icons/brand/logo-mern.js":
/*!**************************************************************!*\
  !*** ./src/shared/react/components/icons/brand/logo-mern.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoMern": () => (/* binding */ LogoMern)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\shared\\react\\components\\icons\\brand\\logo-mern.js";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * The svg component.
 * 
 * @since 1.0.0
 */

function LogoMern(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("symbol", {
    id: "logo-mern",
    viewBox: "0 0 140 171",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M140,0L0,0L0,140L140,140L140,0ZM72,11.95L72,21.95L68,21.95L68,11.95L11.95,11.95L11.95,68L21.95,68L21.95,72L11.95,72L11.95,127.95L68,127.95L68,117.95L72,117.95L72,127.95L127.95,127.95L127.95,72L117.95,72L117.95,68L127.95,68L127.95,11.95L72,11.95Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M82.3,91L82.18,71.86L73.06,87.22L66.82,87.22L57.7,72.52L57.7,91L44.8,91L44.8,49L56.44,49L70.12,71.38L83.44,49L95.08,49L95.2,91L82.3,91Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M14.007,157.586L14.007,170.886L12.658,170.886L12.658,160.246L7.433,169.195L6.768,169.195L1.543,160.303L1.543,170.886L0.194,170.886L0.194,157.586L1.353,157.586L7.129,167.447L12.848,157.586L14.007,157.586Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M29.359,169.67L29.359,170.886L19.954,170.886L19.954,157.586L29.074,157.586L29.074,158.802L21.36,158.802L21.36,163.533L28.238,163.533L28.238,164.73L21.36,164.73L21.36,169.67L29.359,169.67Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M43.362,170.886L40.322,166.611C39.98,166.649 39.625,166.668 39.258,166.668L35.686,166.668L35.686,170.886L34.28,170.886L34.28,157.586L39.258,157.586C40.955,157.586 42.285,157.991 43.248,158.802C44.211,159.613 44.692,160.727 44.692,162.146C44.692,163.185 44.429,164.062 43.904,164.778C43.378,165.493 42.627,166.009 41.652,166.326L44.901,170.886L43.362,170.886ZM39.22,165.471C40.537,165.471 41.544,165.18 42.241,164.597C42.938,164.014 43.286,163.197 43.286,162.146C43.286,161.069 42.938,160.243 42.241,159.666C41.544,159.09 40.537,158.802 39.22,158.802L35.686,158.802L35.686,165.471L39.22,165.471Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M60.747,157.586L60.747,170.886L59.588,170.886L51.038,160.094L51.038,170.886L49.632,170.886L49.632,157.586L50.791,157.586L59.36,168.378L59.36,157.586L60.747,157.586Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M76.954,171C75.966,171 75.019,170.842 74.114,170.525C73.208,170.208 72.508,169.79 72.014,169.271L72.565,168.188C73.046,168.669 73.686,169.059 74.484,169.356C75.282,169.654 76.105,169.803 76.954,169.803C78.145,169.803 79.038,169.585 79.633,169.148C80.228,168.711 80.526,168.144 80.526,167.447C80.526,166.915 80.364,166.491 80.042,166.174C79.718,165.857 79.323,165.613 78.854,165.443C78.385,165.272 77.733,165.085 76.897,164.882C75.896,164.629 75.098,164.385 74.503,164.151C73.908,163.916 73.398,163.558 72.974,163.077C72.549,162.596 72.337,161.943 72.337,161.12C72.337,160.449 72.514,159.838 72.869,159.287C73.224,158.736 73.768,158.295 74.503,157.966C75.238,157.637 76.15,157.472 77.239,157.472C77.999,157.472 78.743,157.576 79.471,157.785C80.2,157.994 80.83,158.283 81.362,158.65L80.887,159.771C80.33,159.404 79.734,159.128 79.101,158.945C78.468,158.761 77.847,158.669 77.239,158.669C76.074,158.669 75.197,158.894 74.608,159.344C74.018,159.793 73.724,160.373 73.724,161.082C73.724,161.614 73.885,162.041 74.209,162.365C74.531,162.688 74.937,162.934 75.425,163.106C75.912,163.277 76.568,163.463 77.391,163.666C78.366,163.907 79.155,164.144 79.756,164.379C80.358,164.613 80.868,164.968 81.286,165.443C81.704,165.918 81.913,166.56 81.913,167.371C81.913,168.042 81.732,168.654 81.372,169.205C81.01,169.755 80.456,170.193 79.709,170.516C78.962,170.838 78.043,171 76.954,171Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M88.981,158.802L84.307,158.802L84.307,157.586L95.061,157.586L95.061,158.802L90.387,158.802L90.387,170.886L88.981,170.886L88.981,158.802Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M106.594,167.333L99.184,167.333L97.588,170.886L96.125,170.886L102.205,157.586L103.592,157.586L109.672,170.886L108.19,170.886L106.594,167.333ZM106.081,166.193L102.889,159.049L99.697,166.193L106.081,166.193Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M119.077,171C117.76,171 116.572,170.709 115.515,170.126C114.457,169.543 113.627,168.736 113.025,167.704C112.424,166.671 112.123,165.515 112.123,164.236C112.123,162.957 112.424,161.801 113.025,160.769C113.627,159.736 114.46,158.929 115.524,158.346C116.588,157.763 117.779,157.472 119.096,157.472C120.084,157.472 120.996,157.637 121.832,157.966C122.668,158.295 123.377,158.777 123.96,159.41L123.067,160.303C122.028,159.252 120.717,158.726 119.134,158.726C118.083,158.726 117.126,158.967 116.265,159.448C115.404,159.929 114.729,160.588 114.241,161.424C113.754,162.26 113.51,163.197 113.51,164.236C113.51,165.275 113.754,166.212 114.241,167.048C114.729,167.884 115.404,168.543 116.265,169.024C117.126,169.505 118.083,169.746 119.134,169.746C120.73,169.746 122.041,169.214 123.067,168.15L123.96,169.043C123.377,169.676 122.665,170.161 121.822,170.497C120.98,170.832 120.065,171 119.077,171Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "u-fill-none",
    d: "M132.7,164.635L129.983,167.39L129.983,170.886L128.577,170.886L128.577,157.586L129.983,157.586L129.983,165.623L137.792,157.586L139.407,157.586L133.65,163.609L139.806,170.886L138.134,170.886L132.7,164.635Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  })));
}
/**
 * Module exports
 */




/***/ }),

/***/ "./src/shared/react/components/icons/index.js":
/*!****************************************************!*\
  !*** ./src/shared/react/components/icons/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoJam": () => (/* reexport safe */ _brand_logo_jam_js__WEBPACK_IMPORTED_MODULE_0__.LogoJam),
/* harmony export */   "LogoMern": () => (/* reexport safe */ _brand_logo_mern_js__WEBPACK_IMPORTED_MODULE_1__.LogoMern)
/* harmony export */ });
/* harmony import */ var _brand_logo_jam_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brand/logo-jam.js */ "./src/shared/react/components/icons/brand/logo-jam.js");
/* harmony import */ var _brand_logo_mern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand/logo-mern.js */ "./src/shared/react/components/icons/brand/logo-mern.js");



/***/ }),

/***/ "./src/shared/react/components/icons/svg.js":
/*!**************************************************!*\
  !*** ./src/shared/react/components/icons/svg.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\shared\\react\\components\\icons\\svg.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/**
 * Declare private properties
 * @private
 */

/**
 * The svg wrapper component.
 * 
 * @since 1.0.0
 */

function Svg(props) {
  // props
  const {
    className: classes,
    color,
    target,
    viewBox,
    ...rest
  } = props;
  /**
   * Render component
   * 
   * @return object
   */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [classes]: classes
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    version: "1.1",
    viewBox: viewBox,
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: "e-svg"
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
    xlinkHref: target,
    fill: color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  })));
}
/**
 * Set default props
 */


Svg.defaultProps = {
  color: '',
  target: '',
  viewBox: ''
};
/**
 * Module exports
 * @public
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svg);

/***/ }),

/***/ "./src/shared/react/components/loaders/loader-pulse.js":
/*!*************************************************************!*\
  !*** ./src/shared/react/components/loaders/loader-pulse.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\shared\\react\\components\\loaders\\loader-pulse.js";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/**
 * Declare private properties
 * @private
 */

/**
 * The pulsate loader component.
 * 
 * @since 1.0.0
 */

function Pulse(props) {
  // Props
  const {
    isLoaded
  } = props; // State

  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  /**
   * Handle offloading event
   */

  const handleLoadEnd = e => {
    setShow(false);
  };
  /**
   * Render component
   * 
   * @return object
   */


  return show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("o-loader-wrap", {
      "u-op-0": isLoaded
    }),
    onTransitionEnd: handleLoadEnd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-loader c-loader--dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-loader__inner c-loader__inner--ball-scale-multiple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-loader__outline-highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-loader__outline-highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-loader__outline-highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("noscript", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, "Please enable javascript..."))));
}
/**
 * Set default props
 */


Pulse.defaultProps = {
  isLoaded: false
};
/**
 * Module exports
 * @public
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pulse);

/***/ }),

/***/ "./src/shared/react/components/modals/cta.js":
/*!***************************************************!*\
  !*** ./src/shared/react/components/modals/cta.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\shared\\react\\components\\modals\\cta.js";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Declare private properties
 * @private
 */

/**
 * The cta modal component.
 * 
 * @since 1.0.0
 */

function Cta(props) {
  // Props
  const {
    id,
    label
  } = props; // Refs

  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  /**
   * Handle component lifecycle
   * 
   * componentDidMount? componentWillUnmount?
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {// componentDidMount
  }, []);
  /**
   * Handle component lifecycle
   * 
   * componentDidUpdate?
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {// componentDidUpdate
    }
  });
  /**
   * Render component
   * 
   * @return object
   */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: id,
    className: "c-modal u-fade",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-modal__dialogue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }));
}
/**
 * Set default props
 */


Cta.defaultProps = {
  id: 'modal-',
  label: ''
};
/**
 * Module exports
 * @public
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cta);

/***/ }),

/***/ "./src/shared/react/constants/defaults.js":
/*!************************************************!*\
  !*** ./src/shared/react/constants/defaults.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adminRoot": () => (/* binding */ adminRoot),
/* harmony export */   "contextKey": () => (/* binding */ contextKey)
/* harmony export */ });
// Names
const contextKey = '__promvc'; // Routes

const adminRoot = '/admin';

/***/ }),

/***/ "./src/shared/react/containers/modules/icons.js":
/*!******************************************************!*\
  !*** ./src/shared/react/containers/modules/icons.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\shared\\react\\containers\\modules\\icons.js";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Declare private properties
 * @private
 */

/**
 * The svg top-level container.
 * 
 * @since 1.0.0
 */

function Icons(props) {
  // Props
  const {
    children
  } = props;
  /**
   * Render component
   * 
   * @return object
   */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    style: {
      width: 0,
      height: 0,
      position: 'absolute'
    },
    xlmns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }), children);
}
/**
 * Module exports
 * @public
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);

/***/ }),

/***/ "./src/shared/react/context/appcontext.js":
/*!************************************************!*\
  !*** ./src/shared/react/context/appcontext.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Context = {
  models: {
    userInfo: {}
  },
  settings: {
    errors: []
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);

/***/ }),

/***/ "./src/shared/react/context/index.js":
/*!*******************************************!*\
  !*** ./src/shared/react/context/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appcontext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appcontext.js */ "./src/shared/react/context/appcontext.js");


function configureContext(data) {
  let final = Object.assign({}, _appcontext_js__WEBPACK_IMPORTED_MODULE_0__["default"]); // Update models

  if (data.models !== undefined) {
    final.models.userInfo = data.models.cu.data;
  } // Update settings


  if (data.errors !== undefined) {
    final.settings.errors = data.errors;
  }

  return final;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configureContext);

/***/ }),

/***/ "./src/shared/react/redux/constants/index.js":
/*!***************************************************!*\
  !*** ./src/shared/react/redux/constants/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_ERROR": () => (/* binding */ ADD_ERROR),
/* harmony export */   "ADD_FIELD_DATA": () => (/* binding */ ADD_FIELD_DATA),
/* harmony export */   "CHANGE_LOCALE": () => (/* binding */ CHANGE_LOCALE),
/* harmony export */   "CLEAR_ERROR": () => (/* binding */ CLEAR_ERROR),
/* harmony export */   "CLEAR_ERRORS": () => (/* binding */ CLEAR_ERRORS),
/* harmony export */   "CLEAR_FIELD_DATA": () => (/* binding */ CLEAR_FIELD_DATA)
/* harmony export */ });
/* MODELS */
const ADD_FIELD_DATA = 'ADD_FIELD_DATA';
const CLEAR_FIELD_DATA = 'CLEAR_FIELD_DATA';
/* SETTINGS */

const ADD_ERROR = 'ADD_ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';
const CLEAR_ERRORS = 'CLEAR_ERRORS';
const CHANGE_LOCALE = 'CHANGE_LOCALE';

/***/ }),

/***/ "./src/shared/react/redux/index.js":
/*!*****************************************!*\
  !*** ./src/shared/react/redux/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addError": () => (/* reexport safe */ _settings_actions_adderror_js__WEBPACK_IMPORTED_MODULE_2__.addError),
/* harmony export */   "addFieldData": () => (/* reexport safe */ _models_actions_addfield_js__WEBPACK_IMPORTED_MODULE_0__.addFieldData),
/* harmony export */   "clearAllErrors": () => (/* reexport safe */ _settings_actions_clearerror_js__WEBPACK_IMPORTED_MODULE_3__.clearAllErrors),
/* harmony export */   "clearError": () => (/* reexport safe */ _settings_actions_clearerror_js__WEBPACK_IMPORTED_MODULE_3__.clearError),
/* harmony export */   "clearFieldData": () => (/* reexport safe */ _models_actions_clearfield_js__WEBPACK_IMPORTED_MODULE_1__.clearFieldData),
/* harmony export */   "configureStore": () => (/* reexport safe */ _store_js__WEBPACK_IMPORTED_MODULE_4__.configureStore),
/* harmony export */   "reducer": () => (/* reexport safe */ _reducers_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "saga": () => (/* reexport safe */ _sagas_js__WEBPACK_IMPORTED_MODULE_6__["default"])
/* harmony export */ });
/* harmony import */ var _models_actions_addfield_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/actions/addfield.js */ "./src/shared/react/redux/models/actions/addfield.js");
/* harmony import */ var _models_actions_clearfield_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/actions/clearfield.js */ "./src/shared/react/redux/models/actions/clearfield.js");
/* harmony import */ var _settings_actions_adderror_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/actions/adderror.js */ "./src/shared/react/redux/settings/actions/adderror.js");
/* harmony import */ var _settings_actions_clearerror_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/actions/clearerror.js */ "./src/shared/react/redux/settings/actions/clearerror.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.js */ "./src/shared/react/redux/store.js");
/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers.js */ "./src/shared/react/redux/reducers.js");
/* harmony import */ var _sagas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sagas.js */ "./src/shared/react/redux/sagas.js");
// Actions



 // Redux store config

 // Reduces

 // Sagas



/***/ }),

/***/ "./src/shared/react/redux/models/actions/addfield.js":
/*!***********************************************************!*\
  !*** ./src/shared/react/redux/models/actions/addfield.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFieldData": () => (/* binding */ addFieldData)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/index.js */ "./src/shared/react/redux/constants/index.js");


function addFieldData(fields) {
  return {
    type: _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.ADD_FIELD_DATA,
    payload: fields
  };
}



/***/ }),

/***/ "./src/shared/react/redux/models/actions/clearfield.js":
/*!*************************************************************!*\
  !*** ./src/shared/react/redux/models/actions/clearfield.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearFieldData": () => (/* binding */ clearFieldData)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/index.js */ "./src/shared/react/redux/constants/index.js");


function clearFieldData() {
  return {
    type: _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.CLEAR_FIELD_DATA
  };
}



/***/ }),

/***/ "./src/shared/react/redux/models/reducers/user.js":
/*!********************************************************!*\
  !*** ./src/shared/react/redux/models/reducers/user.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return { ...state
      };
  }
}

/***/ }),

/***/ "./src/shared/react/redux/reducers.js":
/*!********************************************!*\
  !*** ./src/shared/react/redux/reducers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _settings_reducers_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/reducers/errors.js */ "./src/shared/react/redux/settings/reducers/errors.js");
/* harmony import */ var _models_reducers_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/reducers/user.js */ "./src/shared/react/redux/models/reducers/user.js");



const reducers = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  models: (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
    userInfo: _models_reducers_user_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  }),
  settings: (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
    errors: _settings_reducers_errors_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducers);

/***/ }),

/***/ "./src/shared/react/redux/sagas.js":
/*!*****************************************!*\
  !*** ./src/shared/react/redux/sagas.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux_saga_dist_redux_saga_effects_npm_proxy_cjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/dist/redux-saga-effects-npm-proxy.cjs.js */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.cjs.js");
/* harmony import */ var redux_saga_dist_redux_saga_effects_npm_proxy_cjs_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_dist_redux_saga_effects_npm_proxy_cjs_js__WEBPACK_IMPORTED_MODULE_0__);


function* rootSaga(getState) {
  yield (0,redux_saga_dist_redux_saga_effects_npm_proxy_cjs_js__WEBPACK_IMPORTED_MODULE_0__.all)([]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootSaga);

/***/ }),

/***/ "./src/shared/react/redux/settings/actions/adderror.js":
/*!*************************************************************!*\
  !*** ./src/shared/react/redux/settings/actions/adderror.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addError": () => (/* binding */ addError)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/index.js */ "./src/shared/react/redux/constants/index.js");


function addError(error) {
  return {
    type: _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.ADD_ERROR,
    payload: error
  };
}



/***/ }),

/***/ "./src/shared/react/redux/settings/actions/clearerror.js":
/*!***************************************************************!*\
  !*** ./src/shared/react/redux/settings/actions/clearerror.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearAllErrors": () => (/* binding */ clearAllErrors),
/* harmony export */   "clearError": () => (/* binding */ clearError)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/index.js */ "./src/shared/react/redux/constants/index.js");


function clearError(index) {
  return {
    type: _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ERROR,
    payload: index
  };
}

function clearAllErrors() {
  return {
    type: _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ERRORS
  };
}



/***/ }),

/***/ "./src/shared/react/redux/settings/reducers/errors.js":
/*!************************************************************!*\
  !*** ./src/shared/react/redux/settings/reducers/errors.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/index.js */ "./src/shared/react/redux/constants/index.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.ADD_ERROR:
      return [...state, action.payload];

    case _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ERROR:
      return state.filter((message, i) => {
        return i !== action.payload;
      });

    case _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ERRORS:
      return [];

    default:
      return [...state];
  }
}

/***/ }),

/***/ "./src/shared/react/redux/store.js":
/*!*****************************************!*\
  !*** ./src/shared/react/redux/store.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureStore": () => (/* binding */ configureStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers.js */ "./src/shared/react/redux/reducers.js");



const configureStore = function (initialState) {
  // create middleware
  const loggerMiddleware = (0,redux_logger__WEBPACK_IMPORTED_MODULE_0__.createLogger)(); // create store

  const store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers_js__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, (0,redux__WEBPACK_IMPORTED_MODULE_2__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(loggerMiddleware)));
  return store;
};

/***/ }),

/***/ "./src/shared/react/views/errors/nomatch.js":
/*!**************************************************!*\
  !*** ./src/shared/react/views/errors/nomatch.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var _components_loaders_loader_pulse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/loaders/loader-pulse.js */ "./src/shared/react/components/loaders/loader-pulse.js");
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\shared\\react\\views\\errors\\nomatch.js";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



/**
 * Declare private properties
 * @private
 */

/**
 * The client-side 404 component.
 * 
 * @since 1.0.0
 */

function NoMatch(props) {
  // Refs
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const loc = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  /**
   * Handle component lifecycle
   * 
   * componentDidMount? componentWillUnmount?
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {// componentDidMount
  }, []);
  /**
   * Handle component lifecycle
   * 
   * componentDidUpdate?
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!mounted.current) {
      mounted.current = true; // redirect

      setTimeout(() => {
        location.replace(loc.pathname);
      }, 1000);
    } else {// componentDidUpdate
    }
  });
  /**
   * Render component
   * 
   * @return object
   */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_loaders_loader_pulse_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 3
    }
  });
}
/**
 * Module exports
 * @public
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoMatch);

/***/ }),

/***/ "./src/shared/react/views/home/coming-soon.js":
/*!****************************************************!*\
  !*** ./src/shared/react/views/home/coming-soon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _components_modals_cta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modals/cta.js */ "./src/shared/react/components/modals/cta.js");
/* harmony import */ var _components_icons_svg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icons/svg.js */ "./src/shared/react/components/icons/svg.js");
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\shared\\react\\views\\home\\coming-soon.js";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */




/**
 * Declare private properties
 * @private
 */

/**
 * The client-side front component.
 * 
 * @since 1.0.0
 */

function ComingSoon(props) {
  // Refs
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const reveal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  /**
   * Reveal hidden content.
   */

  function showContent() {
    if (!reveal) {
      return;
    }

    const container = reveal.current;

    if (container.classList.contains('js-reveal--scale-out')) {
      container.style.visibility = 'visible';
      container.style.transform = 'scale(1)';
      container.style.opacity = '1';
    }
  }
  /**
   * Handle component lifecycle
   * 
   * componentDidMount? componentWillUnmount?
   */


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // componentDidMount
    showContent();
  }, []);
  /**
   * Handle component lifecycle
   * 
   * componentDidUpdate?
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {// componentDidUpdate
    }
  });
  /**
   * Render component
   * 
   * @return object
   */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-section-overlay o-section-overlay--media o-section-overlay--youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "page-youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "/images/content/bg/hot_coals.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 6
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-section-overlay u-bg-black u-op-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_modals_cta_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "info",
    className: "o-col-md-12 o-page-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-vert-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: reveal,
    className: "js-reveal js-reveal--scale-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "u-pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "o-logo",
    target: "#logo-jam",
    color: "#fff",
    viewBox: "0 0 140 171",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 10
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "u-pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "e-headline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 300
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 37
    }
  }, "We're launching our"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 100
    }
  }), "new Website"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "e-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 10
    }
  }, "We're coming soon! Awesome template to present your future product or service.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 122
    }
  }), "We're working hard to give you the best experience!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-btn-row u-pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "e-btn e-btn--md e-btn--highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 10
    }
  }, "Notify Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "e-btn e-btn--md e-btn--outline-white",
    to: "/abc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 10
    }
  }, "More Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "u-pt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "e-btn e-btn--social-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bi-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "e-btn e-btn--social-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bi-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "e-btn e-btn--social-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bi-google",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "e-btn e-btn--social-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bi-behance",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "content",
    className: "o-col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 6
    }
  }))));
}
/**
 * Module exports
 * @public
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComingSoon);

/***/ }),

/***/ "./src/shared/react/views/home/index.js":
/*!**********************************************!*\
  !*** ./src/shared/react/views/home/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _containers_modules_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/modules/icons.js */ "./src/shared/react/containers/modules/icons.js");
/* harmony import */ var _components_icons_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icons/index.js */ "./src/shared/react/components/icons/index.js");
/* harmony import */ var _components_loaders_loader_pulse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/loaders/loader-pulse.js */ "./src/shared/react/components/loaders/loader-pulse.js");
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\shared\\react\\views\\home\\index.js";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */





/**
 * Declare private properties
 * @private
 */

/**
 * The client-side front component.
 * 
 * @since 1.0.0
 */

function Home(props) {
  // Refs
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // State

  const [isLoaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  /**
   * Handle component lifecycle
   * 
   * componentDidMount? componentWillUnmount?
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // componentDidMount
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);
  /**
   * Handle component lifecycle
   * 
   * componentDidUpdate?
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {// componentDidUpdate
    }
  });
  /**
   * Render component
   * 
   * @return object
   */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_loaders_loader_pulse_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isLoaded: isLoaded,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_modules_icons_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons_index_js__WEBPACK_IMPORTED_MODULE_2__.LogoJam, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Outlet, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }
  }));
}
/**
 * Module exports
 * @public
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/shared/util/helpers/helper-eventloader.js":
/*!*******************************************************!*\
  !*** ./src/shared/util/helpers/helper-eventloader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventLoader": () => (/* binding */ EventLoader)
/* harmony export */ });
/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Event loader methods
 * 
 * @version 1.0.0
 */
const EventLoader = function () {
  /**
   * Declare private properties
   * @private
   */
  let running = false,
      map = {},
      callbacks = {
    resize: [],
    scroll: []
  }; // debug
  // window.helpers = { map, callbacks };

  /**
   * Declare private methods
   * @private
   */
  // fired on the resize event

  function handleEvents(event) {
    if (!running) {
      let func;
      running = true;

      switch (event.type) {
        case 'resize':
          func = runResizeCallbacks;
          break;

        case 'scroll':
          func = runScrollCallbacks;
          break;

        default:
          running = false;
          return;
      }

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(func);
      } else {
        setTimeout(func, 70);
      }
    }
  } // run the actual callbacks


  function runResizeCallbacks() {
    callbacks.resize.forEach(function (callback) {
      callback();
    });
    running = false;
  } // run the actual callbacks


  function runScrollCallbacks() {
    callbacks.scroll.forEach(function (callback) {
      callback();
    });
    running = false;
  } // adds callback to loop


  function addCallback(type, callback) {
    const keys = Object.keys(map);
    let id = 0;

    if (keys.length > 0) {
      id = parseInt(keys[keys.length - 1]) + 1;
    }

    map[id] = {
      type,
      callback
    }; // reset callback array

    if (resetCallbacks(type)) {
      return id;
    }

    return null;
  } // reset callback loop


  function resetCallbacks(type) {
    if (callbacks[type] === undefined) {
      return false;
    }

    callbacks[type] = [];

    for (const key in map) {
      if (Object.prototype.hasOwnProperty.call(map, key) && map[key]['type'] === type) {
        callbacks[type].push(map[key]['callback']);
      }
    }

    return true;
  } // removes registered callback from loop


  function removeCallback(id) {
    if (map[id] === undefined) {
      return false;
    }

    const type = map[id]['type']; // remove callback

    delete map[id]; // reset callbacks

    return resetCallbacks(type);
  }
  /**
   * Public event loader api.
   * 
   * @since 1.0.0
   */


  const Util = {
    add: function (type, callback) {
      if (typeof type !== 'string' || typeof callback !== 'function') {
        return;
      }

      if (callbacks[type] !== undefined) {
        if (!callbacks[type].length > 0) {
          window.addEventListener(type, handleEvents);
        }

        return addCallback(type, callback);
      }
    },
    remove: function (callbackId) {
      if (callbackId === null || typeof callbackId !== 'number') {
        return false;
      }

      return removeCallback(callbackId);
    },
    throttle: function (type, name, obj) {
      obj = obj || window;

      var func = function () {
        if (running) {
          return;
        }

        running = true;
        requestAnimationFrame(function () {
          // Alternative approach, where name is a legal event type e.g 'MouseEvent'.
          // obj.dispatchEvent( document.createEvent( name ) );
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };

      obj.addEventListener(type, func);
    },
    themeSwitch: function () {
      var computedHtmlStyles = window.getComputedStyle(document.documentElement);
      var mql = window.matchMedia !== undefined ? window.matchMedia('(prefers-color-scheme: dark)') : false;

      var func = function (e) {
        if (e.matches) {
          console.log('switch to dark theme.');
        } else {
          console.log('switch to light theme.');
        }
      }; // Load initial theme taking into account the system level color scheme


      if (computedHtmlStyles.getPropertyValue('content').replace(/"/g, '').trim() === 'dark') {
        console.log('load dark theme.');
      } else {
        console.log('load light theme.');
      } // Opt out if matchMedia is unavailable


      if (mql === false) {
        return;
      } // Add listener to detect theme switching at system level


      if (mql.onchange !== undefined) {
        mql.onchange = func;
      } else if (Object.getPrototypeOf(mql) instanceof EventTarget) {
        // access [[prototype]] property
        mql.addEventListener('change', func);
      } else {
        // use for backwards compatibility in older browsers
        mql.addListener(func);
      }
    }
  };
  return Util;
}();
/**
 * Module exports
 */




/***/ }),

/***/ "./src/shared/util/helpers/index.js":
/*!******************************************!*\
  !*** ./src/shared/util/helpers/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventLoader": () => (/* reexport safe */ _helper_eventloader_js__WEBPACK_IMPORTED_MODULE_0__.EventLoader)
/* harmony export */ });
/* harmony import */ var _helper_eventloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-eventloader.js */ "./src/shared/util/helpers/helper-eventloader.js");
// export * from './helper-arraymethods.js';
 // export * from './helper-htmlentitymethods.js';
// export * from './helper-langmethods.js';
// export * from './helper-objectmethods.js';
// export * from './helper-stringmethods.js';

/***/ }),

/***/ "./src/client/scss/bootstrap-4/home.scss":
/*!***********************************************!*\
  !*** ./src/client/scss/bootstrap-4/home.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/scss/bootstrap-4/main.scss":
/*!***********************************************!*\
  !*** ./src/client/scss/bootstrap-4/main.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			177: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktrevtastic_io"] = self["webpackChunktrevtastic_io"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__("./src/client/app/home/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;