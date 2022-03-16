/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { ObjectMethods } from 'Shared/util/helpers';

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
function RequiredAuth( props )
{
	const { children, user } = props;

	let location = useLocation();

	if ( ObjectMethods.isEmptyObject( user ) )
	{
		return (
			<Navigate
				to="/login"
				state={{ from: location }}
				replace
			/>
		);
	}

	return children;
}

/**
 * Module extension
 * @private
 */
function mapStateToProps( state )
{
	return {
		user: state.models.userInfo
	};
}

function mapDispatchToProps( dispatch )
{
	return {};
}

/**
 * Module exports
 * @public
 */
export default connect( mapStateToProps, mapDispatchToProps )( RequiredAuth );