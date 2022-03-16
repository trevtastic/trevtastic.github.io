import Context from './appcontext.js';

function configureContext( data )
{
	let final = Object.assign( {}, Context );

	// Update models
	if ( data.models !== undefined )
	{
		final.models.userInfo = data.models.cu.data;
	}

	// Update settings
	if ( data.errors !== undefined )
	{
		final.settings.errors = data.errors;
	}

	return final;
}

export default configureContext;