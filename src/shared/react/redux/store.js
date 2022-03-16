import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './reducers.js';

export const configureStore = function ( initialState ) {

	// create middleware
	const loggerMiddleware = createLogger();

	// create store
	const store = createStore(
		reducers,
		initialState,
		compose(
			applyMiddleware( loggerMiddleware )
		)
	);

	return store;

};