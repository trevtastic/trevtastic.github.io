/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { useEffect, useRef } from 'react';

/**
 * Declare private properties
 * @private
 */

/**
 * The pulsate loader component.
 * 
 * @since 1.0.0
 */
function ProxyLoader( props )
{
	// Props
	const { loading } = props;

	// Refs
	const mounted = useRef();
	const loaderWrap = useRef( document.querySelector( '.o-loader-wrap' ) );

	// Vars
	const wrapperClass = 'o-loader-wrap--full';
	const loadingClass = 'is-loading';

	/**
	 * Handle offloading event
	 */
	const handleLoadEnd = function ( e ) {
		const c = e.target.children[ 0 ];

		if ( c ) {
			e.target.classList.remove( loadingClass, wrapperClass );
			e.target.removeChild( c );
		}
	};

	/**
	 * Handle component lifecycle
	 * 
	 * componentDidMount? componentWillUnmount?
	 */
	useEffect(() => {

		// add event listener
		if ( loaderWrap.current && loaderWrap.current.classList.contains( loadingClass ) )
		{
			loaderWrap.current.addEventListener( 'transitionend', handleLoadEnd );

			setTimeout( () => {
				loaderWrap.current.classList.add( 'u-op-0' );
			}, 1500 );
		}

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
		<>...</>
	);
}

/**
 * Set default props
 */
ProxyLoader.defaultProps = {
	loading: true
};

/**
 * Module exports
 * @public
 */
export default ProxyLoader;