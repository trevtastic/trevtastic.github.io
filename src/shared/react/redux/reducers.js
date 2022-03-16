import { combineReducers } from 'redux';

import errors from './settings/reducers/errors.js';
import userInfo from './models/reducers/user.js';

const reducers = combineReducers({
	models: combineReducers({
		userInfo
	}),
	settings: combineReducers({
		errors
	})
});

export default reducers;