/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import classnames from 'classnames';

/**
 * Declare private properties
 * @private
 */

/**
 * The svg wrapper component.
 * 
 * @since 1.0.0
 */
function Svg( props )
{
	// props
	const { className: classes, color, target, viewBox, ...rest } = props;

	/**
	 * Render component
	 * 
	 * @return object
	 */
	return (
		<div
			className={classnames({
				[classes]: classes
			})}
		>
			<svg
				version="1.1"
				viewBox={viewBox}
				xmlSpace="preserve"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				className="e-svg"
				{ ...rest }
			>
				<use xlinkHref={target} fill={color} />
			</svg>
		</div>
	);
}

/**
 * Set default props
 */
Svg.defaultProps = {
	color: '',
	target: '',
	viewBox: ''
};

/**
 * Module exports
 * @public
 */
export default Svg;