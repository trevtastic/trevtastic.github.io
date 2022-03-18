/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/common/components/index.js":
/*!***********************************************!*\
  !*** ./src/client/common/components/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PulseRings": () => (/* reexport safe */ _loaders_pulse_rings_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _loaders_pulse_rings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loaders/pulse-rings.js */ "./src/client/common/components/loaders/pulse-rings.js");
// Alerts
// export { default as CookieDisclosure } from './alerts/cookie-disclosure';
// Forms
// export { default as Form } from './form';
// Loaders
 // export { default as SpinnerSimple } from './loaders/spinner-simple.js';
// Sliders
// export { default as Concord } from './sliders/concord';

/***/ }),

/***/ "./src/client/common/components/loaders/pulse-rings.js":
/*!*************************************************************!*\
  !*** ./src/client/common/components/loaders/pulse-rings.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils.js */ "./src/client/common/helpers/utils.js");
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

const NAME = 'pulseRings';
const VERSION = '1.0.0';
const DATA_KEY = 'promvc.pulse-rings';
const CLASS_NAME_WRAPPER = 'o-loader-wrap';
const CLASS_NAME_WRAPPER_FULL = 'o-loader-wrap--full';
const CLASS_NAME_LOADER = 'c-loader';
const CLASS_NAME_LOADING = 'is-loading';
/**
 * The loader component.
 * 
 * @since 1.0.0
 */

class PulseRings {
  /**
   * The constructor
   */
  constructor() {
    this.rootElement = document.documentElement;
    this.loaders = [].slice.call(document.querySelectorAll(`.${CLASS_NAME_LOADER}`));
  } // Getters


  static get VERSION() {
    return VERSION;
  }
  /**
   * Remove loader from the DOM.
   * 
   * @param {*object} element: the loader container element.
   */


  destroyElement(e) {
    const component = e.target.children[0];
    e.target.classList.remove(CLASS_NAME_WRAPPER_FULL, CLASS_NAME_LOADING);
    e.target.removeChild(component);
  }
  /**
   * Handle loading screen.
   * 
   * @return object
   */


  load() {
    const delay = 1500; // cancel loading

    if (this.loaders.length > 0) {
      for (const loader of this.loaders) {
        const wrapper = loader.parentElement;
        const transitionDuration = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_1__.getTransitionDurationFromElement)(wrapper);
        wrapper.addEventListener('transitionend', this.destroyElement);
        setTimeout(() => {
          wrapper.classList.add('u-op-0');
        }, delay);
      }
    }

    return this;
  } // Static


  static _jQueryInterface(element) {
    const $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    let data = $element.data(DATA_KEY);

    if (!data) {
      data = new PulseRings();
      $element.data(DATA_KEY, data);
    }

    data.load();
  }

}
/**
 * Module exports
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PulseRings);

/***/ }),

/***/ "./src/client/common/helpers/utils.js":
/*!********************************************!*\
  !*** ./src/client/common/helpers/utils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCookies": () => (/* binding */ getCookies),
/* harmony export */   "getTransitionDurationFromElement": () => (/* binding */ getTransitionDurationFromElement),
/* harmony export */   "setCookie": () => (/* binding */ setCookie)
/* harmony export */ });
/**
 * Get current set cookies.
 * 
 * @return object
 */
function getCookies() {
  const cookies = document.cookie;

  if (cookies === '') {
    return {};
  }

  return cookies.split(';').map(cookie => cookie.split('=')).reduce((accumulator, _ref) => {
    let [key, value] = _ref;
    return { ...accumulator,
      [key.trim()]: decodeURIComponent(value)
    };
  }, {});
}
/**
 * Get the transition duration of an element.
 * 
 * @param {*object} element 
 * @return int
 */

function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  }

  let transitionDuration = element.style.transitionDuration,
      transitionDelay = element.style.transitionDelay,
      regex = /^\d+([a-z]+)/,
      duration,
      delay;
  const durationUnit = transitionDuration.match(regex);
  const delayUnit = transitionDelay.match(regex);

  const getValue = (value, unit) => {
    switch (unit) {
      case 'ms':
        return parseFloat(value) / 1000;

      case 's':
        return parseFloat(value);

      default:
        return 0;
    }
  };

  duration = durationUnit ? getValue(transitionDuration, durationUnit[1]) : 0;
  delay = delayUnit ? getValue(transitionDelay, delayUnit[1]) : 0;
  return delay + duration;
}
/**
 * Set a cookie in browser.
 * 
 * @param {*string}  key      The name of the cookie.
 * @param {*string}  value    The value to set for the cookie.
 * @param {*int}     lifetime The cookie expiry time in seconds.
 * @param {*boolean} secure   To only allow transmission of cookie over https.
 * @param {*string}  samesite The cookie cross site restrictions.
 * @param {*string}  domain   The domain or subdomain
 * @param {*string}  path     The path
 * @return void
 */

function setCookie(key, value, lifetime, secure, samesite, domain, path) {
  if (typeof key !== 'string' || typeof value !== 'string') {
    return;
  }

  let params = key + '=' + encodeURIComponent(value);

  if (lifetime && typeof lifetime === 'number') {
    params += '; max-age=' + lifetime;
  }

  if (secure === true) {
    params += '; secure';
  }

  if (samesite && typeof samesite === 'string') {
    params += '; samesite=' + samesite;
  }

  if (domain && typeof domain === 'string') {
    params += '; domain=' + domain;
  }

  if (path && typeof path === 'string') {
    params += '; path=' + path;
  }

  document.cookie = params;
}

/***/ }),

/***/ "./src/client/common/index.js":
/*!************************************!*\
  !*** ./src/client/common/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Shared_util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/util/helpers */ "./src/shared/util/helpers/index.js");
/* harmony import */ var Shared_util_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/util/modules */ "./src/shared/util/modules/index.js");
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index.js */ "./src/client/common/components/index.js");
/* harmony import */ var Scss_bootstrap_4_common_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Scss/bootstrap-4/common.scss */ "./src/client/scss/bootstrap-4/common.scss");
/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



 // CSS


/**
 * Declare private properties
 * @private
 */

const DATA_KEY = 'promvc.common';
let initialised = false;
/**
 * The client-side home app.
 * 
 * @since 1.0.0
 */

class CommonApp {
  constructor(element) {
    this._element = element;
    this._forms = [].slice.call(document.getElementsByClassName('needs-validation'));
  }

  init() {
    if (initialised) return; // Handle UI theme switching

    Shared_util_helpers__WEBPACK_IMPORTED_MODULE_1__.EventLoader.themeSwitch(); // register globals

    this.registerGlobals(); // handle page load

    _components_index_js__WEBPACK_IMPORTED_MODULE_3__.PulseRings._jQueryInterface(this._element); // Register service worker
    // serviceWorker.register( serviceWorkerConfig );
    // register init


    initialised = true;
  }

  registerGlobals() {
    // Add validate methods
    // Promvc.prototype.rules = rules;
    // Promvc.prototype.valid = valid;
    // Promvc.prototype.validate = validate;
    window[Shared_util_modules__WEBPACK_IMPORTED_MODULE_2__.NAME] = new Shared_util_modules__WEBPACK_IMPORTED_MODULE_2__.Promvc();
  } // static


  static _jQueryInterface(config) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

      if (!data) {
        data = new CommonApp(this);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
      }

      if (config === 'init') {
        data[config]();
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

    CommonApp._jQueryInterface.call($wrapper, 'init');
  });
});

/***/ }),

/***/ "./src/client/scss/bootstrap-4/common.scss":
/*!*************************************************!*\
  !*** ./src/client/scss/bootstrap-4/common.scss ***!
  \*************************************************/
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			592: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [296], () => (__webpack_require__("./src/client/common/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;