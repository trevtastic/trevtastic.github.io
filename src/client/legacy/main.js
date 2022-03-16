/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

+function ( $ )
{
	/**
	 * Declare private properties
	 * @private
	 */

	var NAME        = 'promvc-app',
		VERSION     = '2.0.0',
		DATA_KEY    = 'promvc.app',
		initialised = false;

	/**
	 * The client-side legacy js.
	 * 
	 * @since 1.0.0
	 */
	function App( element )
	{
		this._element = element;
	}

	// public

	App.prototype.init = function ()
	{
		if ( initialised ) {
			return;
		}

		// Code goes here...
		console.log( 'Legacy init...' );

		// register init
		initialised = true;
	};

	// static

	App._jQueryInterface = function ( config )
	{
		return this.each( function () {
			let data = $( this ).data( DATA_KEY );

			if ( ! data ) {
				data = new App( this );
				$( this ).data( DATA_KEY, data );
			}

			if ( config === 'init' ) {
				data[ config ]();
			}
		});
	};

	/**
	 * --------------------
	 * Application Load
	 * --------------------
	 */

	$( function ()
	{	
		$( 'body' ).each( function () {
			const $wrapper = $( this );
			App._jQueryInterface.call( $wrapper, 'init' );
		});

	});

}( jQuery );