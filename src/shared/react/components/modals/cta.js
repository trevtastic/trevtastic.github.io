/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { useEffect, useRef } from 'react';

/**
 * Declare private properties
 * @private
 */

/**
 * The cta modal component.
 * 
 * @since 1.0.0
 */
function Cta( props )
{
	// Props
	const { id, label } = props;

	// Refs
	const mounted = useRef();

	/**
	 * Handle component lifecycle
	 * 
	 * componentDidMount? componentWillUnmount?
	 */
	useEffect(() => {

		// componentDidMount

	}, []);

	/**
	 * Handle component lifecycle
	 * 
	 * componentDidUpdate?
	 */
	useEffect(() => {

		if ( ! mounted.current ) {
			mounted.current = true;
		} else {
			// componentDidUpdate
		}

	});

	/**
	 * Render component
	 * 
	 * @return object
	 */
	return (
		<div
			id={id}
			className="c-modal u-fade"
			tabIndex={-1}
			role="dialog"
			aria-labelledby={label}
		>
			<div className="c-modal__dialogue"></div>
		</div>
	);
}

/**
 * Set default props
 */
Cta.defaultProps = {
	id: 'modal-',
	label: ''
};

/**
 * Module exports
 * @public
 */
export default Cta;