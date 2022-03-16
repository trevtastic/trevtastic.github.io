/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react';

/**
 * Declare private properties
 * @private
 */

/**
 * The svg top-level container.
 * 
 * @since 1.0.0
 */
function Icons( props )
{
	// Props
	const { children } = props;

	/**
	 * Render component
	 * 
	 * @return object
	 */
	return (
		<svg
			style={{
				width: 0,
				height: 0,
				position: 'absolute'
			}}
			xlmns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<defs></defs>
			{children}
		</svg>
	);
}

/**
 * Module exports
 * @public
 */
export default Icons;