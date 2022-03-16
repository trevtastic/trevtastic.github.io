/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

/**
 * Declare private properties
 * @private
 */

/**
 * The client-side 404 component.
 * 
 * @since 1.0.0
 */
function ErrorCode( props )
{
	// debug
	// console.log( 'Error props: ', props );

	// Props
	const { errors } = props;

	// Refs
	const mounted = useRef();

	// Vars
	const codeMap = {
		404: 'Not found',
		500: 'Server'
	};

	let error = { code: 404, name: 'Error', message: 'Page not found.' };
	if ( errors.length > 0 )
	{
		let err = errors[ errors.length - 1 ]; // get the latest error

		if ( typeof err === 'string' ) {
			error.message = err;
		} else {
			error = { ...error, ...err };
		}
	}

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
		<>
			<div className="o-section-error">
				<div className="c-concord">
					<div className="c-concord__pane u-align-content">
						<span className="c-concord__align c-concord__align--error"></span>
						<div className="c-concord__content">
							<div className="c-concord__bg"></div>
							<div className="c-concord__info">
								<div className="o-container-fluid">
									<div className="o-row">
										<div className="o-col-xs-12">
											<div className="c-concord__text c-concord__text--error">
												<p className="c-concord__text__emphasis">
													{'ERROR ' + error.code + ' ' + codeMap[ error.code ].toUpperCase()}
												</p>
												<p className="c-concord__text__regular">
													<span className="arrow">&gt;&gt;</span>
													<span>{error.message}</span>
												</p>
											</div>
											<div className="c-concord__links">
												<a href='/' className="e-btn e-btn--lg e-btn--highlight">Go Back Home</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

/**
 * Redux setup
 */

function mapStateToProps( state )
{
	return {
		errors: state.settings.errors,
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
export default connect( mapStateToProps, mapDispatchToProps )( ErrorCode );