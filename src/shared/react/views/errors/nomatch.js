/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

import PulseLoader from '../../components/loaders/loader-pulse.js';

/**
 * Declare private properties
 * @private
 */

/**
 * The client-side 404 component.
 * 
 * @since 1.0.0
 */
function NoMatch( props )
{
	// Refs
	const mounted = useRef();
	const loc = useLocation();

	/**
	 * Handle component lifecycle
	 * 
	 * componentDidMount? componentWillUnmount?
	 */
	useEffect(() => {

		// componentDidMount

	}, [] );

	/**
	 * Handle component lifecycle
	 * 
	 * componentDidUpdate?
	 */
	useEffect(() => {

		if ( ! mounted.current )
		{
			mounted.current = true;

			// redirect
			setTimeout( () => {
				location.replace( loc.pathname );
			}, 1000 );
		}
		else
		{
			// componentDidUpdate
		}

	});

	/**
	 * Render component
	 * 
	 * @return object
	 */
	return (
		<PulseLoader />
	);
}

/**
 * Module exports
 * @public
 */
export default NoMatch;