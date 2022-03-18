"use strict";
(self["webpackChunktrevtastic_io"] = self["webpackChunktrevtastic_io"] || []).push([[82],{

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
      lineNumber: 84,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-section-overlay o-section-overlay--media o-section-overlay--youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "page-youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "/assets/img/bg/hot_coals.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-section-overlay u-bg-black u-op-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_modals_cta_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "info",
    className: "o-col-md-12 o-page-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-vert-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: reveal,
    className: "js-reveal js-reveal--scale-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "u-pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
      lineNumber: 99,
      columnNumber: 10
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "u-pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "e-headline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 300
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }, "We're launching our"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 100
    }
  }), "new Website"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "e-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 10
    }
  }, "We're coming soon! Awesome template to present your future product or service.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 122
    }
  }), "We're working hard to give you the best experience!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-btn-row u-pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "e-btn e-btn--md e-btn--highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 10
    }
  }, "Notify Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "e-btn e-btn--md e-btn--outline-white",
    to: "/abc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 10
    }
  }, "More Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "u-pt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "e-btn e-btn--social-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bi-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "e-btn e-btn--social-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bi-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "e-btn e-btn--social-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bi-google",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "e-btn e-btn--social-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "bi-behance",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "content",
    className: "o-col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 6
    }
  }))));
}
/**
 * Module exports
 * @public
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComingSoon);

/***/ })

}]);