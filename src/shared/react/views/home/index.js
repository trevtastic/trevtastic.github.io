/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Icons from '../../containers/modules/icons.js';
import { LogoJam } from '../../components/icons/index.js';
import Pulse from '../../components/loaders/loader-pulse.js';

/**
 * Declare private properties
 * @private
 */

/**
 * The client-side front component.
 * 
 * @since 1.0.0
 */
function Home( props )
{
	// Refs
	const mounted = useRef();

	// State
	const [ isLoaded, setLoaded ] = useState( false );

	/**
	 * Handle component lifecycle
	 * 
	 * componentDidMount? componentWillUnmount?
	 */
	useEffect(() => {

		// componentDidMount
		setTimeout( () => {
			setLoaded( true );
		}, 1500 );

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
			<Pulse isLoaded={isLoaded} />
			<Icons>
				<LogoJam />
			</Icons>
			<Outlet />
		</>
	);
}

/**
 * Module exports
 * @public
 */
export default Home;