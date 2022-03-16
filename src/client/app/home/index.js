/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import $ from 'jquery';

import AppEntry from '../index.js';
import App from './app.js';

import 'Scss/bootstrap-4/home.scss';

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
	}

	render( type )
	{
		if ( initialised ) return;

		type = type || 'react';

		// Render app
		const entry = new AppEntry();
		
		switch ( type )
		{
			case 'react':
				entry.renderReactApp( App );
				initialised = true;
			break;

			default:
				console.error( 'No valid initialization key given.' );
		}
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

			if ( config === 'render' ) {
				data[ config ]( 'react' );
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
		ReactApp._jQueryInterface.call( $wrapper, 'render' );
	});

});
