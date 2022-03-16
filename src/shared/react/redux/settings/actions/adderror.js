import { ADD_ERROR } from '../../constants/index.js';

function addError( error )
{
	return {
		type: ADD_ERROR,
		payload: error
	};
}

export { addError };