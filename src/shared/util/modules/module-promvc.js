/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import $ from 'jquery';

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
class Promvc
{
	// See https://api.jquery.com/category/selectors/, for CSS
	// meta-characters that should be escaped in order to be used with JQuery
	// as a literal part of a name/id or any selector.
	escapeCssMeta( string )
	{
		return string.replace( /([\\!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, '\\$1' );
	}

	// Return the first defined argument, allowing empty strings
	findDefined()
	{
		for ( let i = 0; i < arguments.length; i++ ) {
			if ( arguments[ i ] !== undefined ) {
				return arguments[ i ];
			}
		}

		return undefined;
	}

	objectLength( obj )
	{
		/* jshint unused: false */
		let count = 0, i;
		
		for ( i in obj ) {
			// This check allows counting elements with empty error
			// message as invalid elements
			if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
				count++;
			}
		}

		return count;
	}
}

/**
 * Module exports
 */
export { NAME };
export default Promvc;