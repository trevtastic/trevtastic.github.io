/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import $ from 'jquery';
import { Util } from 'Util/bootstrap/v4';

/**
 * Declare private properties
 * @private
 */

const NAME = 'spinnerSimple';
const VERSION = '1.0.0';
const DATA_KEY = 'promvc.spinner-simple';

/**
 * The loader component.
 * 
 * @since 1.0.0
 */
class SpinnerSimple
{
	/**
	 * The constructor
	 */
	constructor()
	{
		this.rootElement = document.documentElement;
		this.loaders = [].slice.call( document.querySelectorAll( // convert NodeList object to array object
			'[data-preloader="main"],' +
			'[data-preloader="sub"]'
		));
	}

	// Getters

	static get VERSION() {
		return VERSION;
	}

	/**
	 * Remove loader from the DOM.
	 * 
	 * @param {*object} element: the loader container element.
	 * @param {*string} key: the event to trigger before removal.
	 */
	destroyElement( element, key = '' )
	{
		$( element )
			.detach()
			.trigger( `${key}` )
			.remove();
	}

	/**
	 * Handle loading screen.
	 * 
	 * @return object
	 */
	load()
	{
		const delay = 1200;

		// cancel loading
		if ( this.loaders.length > 0 )
		{
			for ( const loader of this.loaders )
			{
				const transitionDuration = Util.getTransitionDurationFromElement( loader );
				
				$( loader )
					.addClass( 'loading' )
					.one( 'closed.app.load', ( e ) => {
						this.rootElement.style.overflow = '';
					})
					.one( Util.TRANSITION_END, ( e ) => {
						this.destroyElement( loader, `closed.app.load` );
					})
					.emulateTransitionEnd( delay + transitionDuration );

				setTimeout( () => {
					loader.classList.add( 'loaded' );
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
			data = new SpinnerSimple();
			$element.data( DATA_KEY, data );
		}

		data.load();
	}

}

/**
 * Module exports
 */
export default SpinnerSimple;
