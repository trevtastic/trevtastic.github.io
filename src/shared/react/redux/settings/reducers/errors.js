import { ADD_ERROR, CLEAR_ERROR, CLEAR_ERRORS } from '../../constants/index.js';

export default function ( state = [], action )
{
	switch( action.type )
	{
		case ADD_ERROR:
			return [ ...state, action.payload ];

		case CLEAR_ERROR:
			return state.filter( ( message, i ) => { return i !== action.payload; } );

		case CLEAR_ERRORS:
			return [];
		
		default:
			return [ ...state ];
	}
}