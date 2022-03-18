/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import $ from 'jquery';

import AppEntry from './apprenderer.js';
import { EventLoader } from 'Shared/util/helpers';
// CSS
import 'Scss/bootstrap-4/react.scss';

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
class ReactApp
{
	constructor( element )
	{
		this._element = element;
		this._context = window.promvc != undefined ? window.promvc.context : {};
	}

	init()
	{
		if ( initialised ) return;

		// Handle UI theme switching
		EventLoader.themeSwitch();

		// Render app
		const app = new AppEntry();
		app.init( this._context );

		// register init
		initialised = true;
	}

	// static

	static _jQueryInterface( config )
	{
		return this.each( function () {
			let data = $( this ).data( DATA_KEY );

			if ( ! data ) {
				data = new ReactApp( this );
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
		ReactApp._jQueryInterface.call( $wrapper, 'init' );
	});

});
