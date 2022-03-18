"use strict";
(self["webpackChunktrevtastic_io"] = self["webpackChunktrevtastic_io"] || []).push([[630],{

/***/ "./src/shared/react/views/errors/code.js":
/*!***********************************************!*\
  !*** ./src/shared/react/views/errors/code.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "C:\\Users\\tchig\\Sites\\trevtastic\\src\\shared\\react\\views\\errors\\code.js";

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

function ErrorCode(props) {
  // debug
  // console.log( 'Error props: ', props );
  // Props
  const {
    errors
  } = props; // Refs

  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Vars

  const codeMap = {
    404: 'Not found',
    500: 'Server'
  };
  let error = {
    code: 404,
    name: 'Error',
    message: 'Page not found.'
  };

  if (errors.length > 0) {
    let err = errors[errors.length - 1]; // get the latest error

    if (typeof err === 'string') {
      error.message = err;
    } else {
      error = { ...error,
        ...err
      };
    }
  }
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-section-error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-concord c-concord--error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-concord__pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-concord__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-concord__bg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 8
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-concord__info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "o-col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-concord__text c-concord__text--error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "c-concord__text__emphasis",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, 'ERROR ' + error.code + ' ' + codeMap[error.code].toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "c-concord__text__regular",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 14
    }
  }, ">>"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 14
    }
  }, error.message))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-concord__links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/",
    className: "e-btn e-btn--lg e-btn--highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "Go Back Home")))))))))));
}
/**
 * Redux setup
 */


function mapStateToProps(state) {
  return {
    errors: state.settings.errors
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
/**
 * Module exports
 * @public
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(ErrorCode));

/***/ })

}]);