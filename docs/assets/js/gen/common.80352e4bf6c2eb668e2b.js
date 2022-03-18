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

/***/ "./src/shared/util/modules/index.js":
/*!******************************************!*\
  !*** ./src/shared/util/modules/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAME": () => (/* reexport safe */ _module_promvc_js__WEBPACK_IMPORTED_MODULE_0__.NAME),
/* harmony export */   "Promvc": () => (/* reexport safe */ _module_promvc_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _module_promvc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-promvc.js */ "./src/shared/util/modules/module-promvc.js");



/***/ }),

/***/ "./src/shared/util/modules/module-promvc.js":
/*!**************************************************!*\
  !*** ./src/shared/util/modules/module-promvc.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAME": () => (/* binding */ NAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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

const NAME = 'promvc';
const VERSION = '2.0.0';
/**
 * The modules entry.
 * 
 * @since 1.0.0
 */

class Promvc {
  // See https://api.jquery.com/category/selectors/, for CSS
  // meta-characters that should be escaped in order to be used with JQuery
  // as a literal part of a name/id or any selector.
  escapeCssMeta(string) {
    return string.replace(/([\\!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, '\\$1');
  } // Return the first defined argument, allowing empty strings


  findDefined() {
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] !== undefined) {
        return arguments[i];
      }
    }

    return undefined;
  }

  objectLength(obj) {
    /* jshint unused: false */
    let count = 0,
        i;

    for (i in obj) {
      // This check allows counting elements with empty error
      // message as invalid elements
      if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
        count++;
      }
    }

    return count;
  }

}
/**
 * Module exports
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promvc);

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/client/common/index.js ***!
  \************************************/
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
})();

/******/ })()
;