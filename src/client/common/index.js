/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import $ from 'jquery';

import { EventLoader } from 'Shared/util/helpers';
import {
	NAME as mainName,
	Promvc
} from 'Shared/util/modules';
import { PulseRings } from './components/index.js';
// CSS
import 'Scss/bootstrap-4/common.scss';

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
class CommonApp
{
	constructor( element )
	{
		this._element = element;
		this._forms = [].slice.call( document.getElementsByClassName( 'needs-validation' ) );
	}

	init()
	{
		if ( initialised ) return;

		// Handle UI theme switching
		EventLoader.themeSwitch();

		// register globals
		this.registerGlobals();

		// handle page load
		PulseRings._jQueryInterface( this._element );

		// Register service worker
		// serviceWorker.register( serviceWorkerConfig );

		// register init
		initialised = true;
	}

	registerGlobals()
	{
		// Add validate methods
		// Promvc.prototype.rules = rules;
		// Promvc.prototype.valid = valid;
		// Promvc.prototype.validate = validate;

		window[ mainName ] = new Promvc();
	}

	// static

	static _jQueryInterface( config )
	{
		return this.each( function () {
			let data = $( this ).data( DATA_KEY );

			if ( ! data ) {
				data = new CommonApp( this );
				$( this ).data( DATA_KEY, data );
			}

			if ( config === 'init' ) {
				data[ config ]();
			}
		});
	}
}

/**
 * --------------------
 * Application Load
 * --------------------
 */

$( function () {

	$( 'body' ).each( function () {
		const $wrapper = $( this );
		CommonApp._jQueryInterface.call( $wrapper, 'init' );
	});

});
