/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */

if ( typeof jQuery === 'undefined' ) {
	throw new Error( 'Bootstrap\'s JavaScript requires jQuery' );
}

+function ( $ )
{
	var version = $.fn.jquery.split( ' ' )[ 0 ].split( '.' );
	if (
		( version[ 0 ] < 2 && version[ 1 ] < 9 ) ||
		( version[ 0 ] == 1 && version[ 1 ] == 9 && version[ 2 ] < 1 ) ||
		( version[ 0 ] > 3 )
	) {
		throw new Error( 'Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4' );
	}
}( jQuery );
