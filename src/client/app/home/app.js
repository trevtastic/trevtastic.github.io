/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import ViewHome from 'Shared/react/views/home';
import ViewComingSoon from 'Shared/react/views/home/coming-soon';
import NoMatch from 'Shared/react/views/errors/nomatch';

/**
 * Declare private properties
 * @private
 */

/**
 * The server-side app component.
 * 
 * @since 1.0.0
 * 
 * @access public
 * @param  {object} props The component props.
 * @return {object}
 */
function App( props )
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
		<Routes>
			<Route path="/" element={<ViewHome />}>
				<Route index element={<ViewComingSoon />} />
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
}

/**
 * Module exports
 * @public
 */
export default App;