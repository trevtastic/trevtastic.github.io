/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { useState } from 'react';
import classnames from 'classnames';

/**
 * Declare private properties
 * @private
 */

/**
 * The pulsate loader component.
 * 
 * @since 1.0.0
 */
function Pulse( props )
{
	// Props
	const { isLoaded } = props;

	// State
	const [ show, setShow ] = useState( true );

	/**
	 * Handle offloading event
	 */
	const handleLoadEnd = ( e ) => {
		setShow( false );
	};

	/**
	 * Render component
	 * 
	 * @return object
	 */
	return (
		show && <div
			className={classnames(
				"o-loader-wrap",
				{ "u-op-0": isLoaded }
			)}
			onTransitionEnd={handleLoadEnd}
		>
			<div className="c-loader c-loader--dark">
				<div className="c-loader__inner c-loader__inner--ball-scale-multiple">
					<div className="c-loader__outline-highlight"></div>
					<div className="c-loader__outline-highlight"></div>
					<div className="c-loader__outline-highlight"></div>
				</div>
				<noscript>
					<p>Please enable javascript...</p>
				</noscript>
			</div>
		</div>
	);
}

/**
 * Set default props
 */
Pulse.defaultProps = {
	isLoaded: false
};

/**
 * Module exports
 * @public
 */
export default Pulse;