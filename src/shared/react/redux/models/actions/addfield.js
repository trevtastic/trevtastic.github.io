import { ADD_FIELD_DATA } from '../../constants/index.js';

function addFieldData( fields )
{
	return {
		type: ADD_FIELD_DATA,
		payload: fields
	};
}

export { addFieldData };