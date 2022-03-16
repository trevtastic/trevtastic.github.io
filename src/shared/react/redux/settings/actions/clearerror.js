import { CLEAR_ERROR, CLEAR_ERRORS } from '../../constants/index.js';

function clearError( index ) {
	return {
		type: CLEAR_ERROR,
		payload: index
	};
}

function clearAllErrors() {
	return {
		type: CLEAR_ERRORS
	};
}

export { clearError, clearAllErrors };