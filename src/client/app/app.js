/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from 'Shared/react/components/loaders/loader-proxy';
import ViewHome from 'Shared/react/views';

// const ViewHome = lazy( () => import( /* webpackChunkName: 'views' */ 'Shared/react/views' ) );
const ViewComingSoon = lazy( () => import( /* webpackChunkName: 'views.home.soon' */ 'Shared/react/views/home/coming-soon' ) );
const ViewError = lazy( () => import( /* webpackChunkName: 'views.errors.code' */ 'Shared/react/views/errors/code' ) );

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
		<Router>
			<Routes>
				<Route path="/" element={<ViewHome />}>
					<Route
						index
						element={
							<Suspense fallback={<Loader />}>
								<ViewComingSoon />
							</Suspense>
						}
					/>
					<Route
						path="*"
						element={
							<Suspense fallback={<Loader />}>
								<ViewError />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</Router>
	);
}

/**
 * Module exports
 * @public
 */
export default App;