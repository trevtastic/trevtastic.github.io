"use strict";

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery');
}

+function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.');

  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4');
  }
}(jQuery);
"use strict";

/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
+function ($) {
  /**
   * Declare private properties
   * @private
   */
  var NAME = 'promvc-app',
      VERSION = '2.0.0',
      DATA_KEY = 'promvc.app',
      initialised = false;
  /**
   * The client-side legacy js.
   * 
   * @since 1.0.0
   */

  function App(element) {
    this._element = element;
  } // public


  App.prototype.init = function () {
    if (initialised) {
      return;
    } // Code goes here...


    console.log('Legacy init...'); // register init

    initialised = true;
  }; // static


  App._jQueryInterface = function (config) {
    return this.each(function () {
      var data = $(this).data(DATA_KEY);

      if (!data) {
        data = new App(this);
        $(this).data(DATA_KEY, data);
      }

      if (config === 'init') {
        data[config]();
      }
    });
  };
  /**
   * --------------------
   * Application Load
   * --------------------
   */


  $(function () {
    $('body').each(function () {
      var $wrapper = $(this);

      App._jQueryInterface.call($wrapper, 'init');
    });
  });
}(jQuery);