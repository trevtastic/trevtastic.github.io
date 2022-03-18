/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { contextKey } from 'Shared/react/constants/defaults';
import configureContext from 'Shared/react/context';
import { addError, configureStore } from 'Shared/react/redux';
import App from './app.js';
// import * as serviceWorker from 'Workers/service';
// import { serviceWorkerConfig } from 'Util';

/**
 * Declare private properties
 * @private
 */

const NAME     = 'promvc_app';
const VERSION  = '1.0.0';

/**
 * The client-side app entry.
 * 
 * @since 1.0.0
 */
class AppEntry
{
	// getters

	get NAME() {
		return NAME;
	}

	get VERSION() {
		return VERSION;
	}

	init( state )
	{
		const initialState = ( localStorage[ contextKey ] ) ?
			JSON.parse( localStorage[ contextKey ] ) : configureContext( state );
		const store = configureStore( initialState );

		// create state cookie
		const saveState = () => {
			localStorage[ contextKey ] = JSON.stringify( store.getState() );
		};
		store.subscribe( saveState );

		// error handling
		const handleError = ( error ) => {
			store.dispatch( addError( error.message ) );
		};
		window.addEventListener( 'error', handleError );

		// add globals - debug
		window.React = React;
		window.store = store;

		// render application
		ReactDOM.render(
			<StrictMode>
				<Provider store={store}>
					<App />
				</Provider>
			</StrictMode>,
			document.getElementById( 'appMountPoint' )
		);

		// register service worker
		// serviceWorker.register( serviceWorkerConfig );
	}
}

/**
 * Module exports
 * @public
 */
export default AppEntry;