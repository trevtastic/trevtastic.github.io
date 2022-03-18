/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import $ from 'jquery';

import {
	getTransitionDurationFromElement
} from '../../helpers/utils.js';

/**
 * Declare private properties
 * @private
 */

const NAME     = 'pulseRings';
const VERSION  = '1.0.0';
const DATA_KEY = 'promvc.pulse-rings';

const CLASS_NAME_WRAPPER      = 'o-loader-wrap';
const CLASS_NAME_WRAPPER_FULL = 'o-loader-wrap--full';
const CLASS_NAME_LOADER       = 'c-loader';
const CLASS_NAME_LOADING      = 'is-loading';

/**
 * The loader component.
 * 
 * @since 1.0.0
 */
class PulseRings
{
	/**
	 * The constructor
	 */
	constructor()
	{
		this.rootElement = document.documentElement;
		this.loaders = [].slice.call( document.querySelectorAll( `.${CLASS_NAME_LOADER}` ) );
	}

	// Getters

	static get VERSION() {
		return VERSION;
	}

	/**
	 * Remove loader from the DOM.
	 * 
	 * @param {*object} element: the loader container element.
	 */
	destroyElement( e )
	{
		const component = e.target.children[ 0 ];

		e.target.classList.remove( CLASS_NAME_WRAPPER_FULL, CLASS_NAME_LOADING );
		e.target.removeChild( component );
	}

	/**
	 * Handle loading screen.
	 * 
	 * @return object
	 */
	load()
	{
		const delay = 1500;

		// cancel loading
		if ( this.loaders.length > 0 )
		{
			for ( const loader of this.loaders )
			{
				const wrapper = loader.parentElement;
				const transitionDuration = getTransitionDurationFromElement( wrapper );

				wrapper.addEventListener( 'transitionend', this.destroyElement );
				
				setTimeout( () => {
					wrapper.classList.add( 'u-op-0' );
				}, delay );
			}
		}

		return this;
	}

	// Static

	static _jQueryInterface( element )
	{
		const $element = $( element );
		let data = $element.data( DATA_KEY );

		if ( ! data ) {
			data = new PulseRings();
			$element.data( DATA_KEY, data );
		}

		data.load();
	}

}

/**
 * Module exports
 */
export default PulseRings;
