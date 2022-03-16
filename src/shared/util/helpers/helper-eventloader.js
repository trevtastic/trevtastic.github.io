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
const EventLoader = ( function () {

	/**
	 * Declare private properties
	 * @private
	 */

	let running = false,
		map = {},
		callbacks = {
			resize: [],
			scroll: []
		};

	// debug
	// window.helpers = { map, callbacks };

	/**
	 * Declare private methods
	 * @private
	 */

	// fired on the resize event
	function handleEvents( event )
	{
		if ( ! running )
		{
			let func;

			running = true;

			switch ( event.type )
			{
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

			if ( window.requestAnimationFrame ) {
				window.requestAnimationFrame( func );
			} else {
				setTimeout( func, 70 );
			}
		}
	}

	// run the actual callbacks
	function runResizeCallbacks()
	{
		callbacks.resize.forEach( function ( callback ) {
			callback();
		});

		running = false;
	}

	// run the actual callbacks
	function runScrollCallbacks()
	{
		callbacks.scroll.forEach( function ( callback ) {
			callback();
		});

		running = false;
	}

	// adds callback to loop
	function addCallback( type, callback )
	{
		const keys = Object.keys( map );
		let id = 0;

		if ( keys.length > 0 ) {
			id = parseInt( keys[ keys.length - 1 ] ) + 1;
		}

		map[ id ] = { type, callback };

		// reset callback array
		if ( resetCallbacks( type ) ) {
			return id;
		}

		return null;
	}

	// reset callback loop
	function resetCallbacks( type )
	{
		if ( callbacks[ type ] === undefined ) {
			return false;
		}

		callbacks[ type ] = [];

		for ( const key in map )
		{
			if ( Object.prototype.hasOwnProperty.call( map, key ) && map[ key ][ 'type' ] === type )
			{
				callbacks[ type ].push( map[ key ][ 'callback' ] );
			}
		}

		return true;
	}

	// removes registered callback from loop
	function removeCallback( id )
	{
		if ( map[ id ] === undefined ) {
			return false;
		}

		const type = map[ id ][ 'type' ];

		// remove callback
		delete map[ id ];

		// reset callbacks
		return resetCallbacks( type );
	}

	/**
	 * Public event loader api.
	 * 
	 * @since 1.0.0
	 */
	const Util = {

		add: function ( type, callback )
		{
			if ( typeof type !== 'string' || typeof callback !== 'function' ) {
				return;
			}

			if ( callbacks[ type ] !== undefined )
			{
				if ( ! callbacks[ type ].length > 0 ) {
					window.addEventListener( type, handleEvents );
				}

				return addCallback( type, callback );
			}
		},

		remove: function ( callbackId )
		{
			if ( callbackId === null || typeof callbackId !== 'number' ) {
				return false;
			}

			return removeCallback( callbackId );
		},

		throttle: function ( type, name, obj )
		{
			obj = obj || window;
			var func = function () {
				if ( running ) { return; }
				running = true;
				requestAnimationFrame( function () {
					// Alternative approach, where name is a legal event type e.g 'MouseEvent'.
					// obj.dispatchEvent( document.createEvent( name ) );
					obj.dispatchEvent( new CustomEvent( name ) );
					running = false;
				});
			};
			obj.addEventListener( type, func );
		},

		themeSwitch: function ()
		{
			var computedHtmlStyles = window.getComputedStyle( document.documentElement );
			var mql = ( window.matchMedia !== undefined ? window.matchMedia( '(prefers-color-scheme: dark)' ) : false );

			var func = function ( e ) {
				if ( e.matches ) {
					console.log( 'switch to dark theme.' );
				} else {
					console.log( 'switch to light theme.' );
				}
			};

			// Load initial theme taking into account the system level color scheme
			if ( computedHtmlStyles.getPropertyValue( 'content' ).replace( /"/g, '' ).trim() === 'dark' ) {
				console.log( 'load dark theme.' );
			} else {
				console.log( 'load light theme.' );
			}

			// Opt out if matchMedia is unavailable
			if ( mql === false ) {
				return;
			}
			
			// Add listener to detect theme switching at system level
			if ( mql.onchange !== undefined ) {
				mql.onchange = func;
			} else if ( Object.getPrototypeOf( mql ) instanceof EventTarget ) { // access [[prototype]] property
				mql.addEventListener( 'change', func );
			} else { // use for backwards compatibility in older browsers
				mql.addListener( func );
			}
		}

	};

	return Util;

}());

/**
 * Module exports
 */
export { EventLoader };