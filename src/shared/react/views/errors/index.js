/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Declare private properties
 * @private
 */

/**
 * The client-side error component.
 * 
 * @since 1.0.0
 */
function ErrorPage( props )
{
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
		<>
			<Outlet />
		</>
	);
}

/**
 * Module exports
 * @public
 */
export default ErrorPage;