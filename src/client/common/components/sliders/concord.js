/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import $ from 'jquery';

import { defaultBreakpoints } from 'Common/constants';
import { EventLoader } from 'Util/helpers';

/**
 * Declare private properties
 * @private
 */

const NAME = 'concord';
const VERSION = '1.0.0';
const DATA_KEY = 'promvc.concord';

const CLASS_NAME_WRAPPER = '.c-concord';

/**
 * The concord slider component.
 * 
 * @since 1.0.0
 */
class Concord
{
	/**
	 * The constructor
	 */
	constructor()
	{
		this.rootElement = document.querySelector( CLASS_NAME_WRAPPER );
		this._maxHeight = 1000;

		this.setHeight();
	}

	// Getters

	static get VERSION() {
		return VERSION;
	}

	/**
	 * Handle loading screen.
	 * 
	 * @return object
	 */
	load()
	{
		if ( ! this.rootElement ) {
			return;
		}

		// register events

		this.registerEvents();
	}

	/**
	 * Register events
	 */
	registerEvents()
	{
		const $this = this;

		// resize event listener
		EventLoader.add( 'resize', function () {
			$this.setHeight();
		});
	}

	/**
	 * Set the container height.
	 */
	setHeight()
	{
		const isLandscape = window.innerWidth > window.innerHeight;

		if ( isLandscape && window.innerHeight > this._maxHeight ) {
			this._height = 'calc(' + this._maxHeight + 'px' + ' - ' + this.rootElement.offsetTop + 'px)';
		} else if ( isLandscape ) {
			this._height = 'calc(100vh - ' + this.rootElement.offsetTop + 'px)';
		} else {
			this._height = ''; // Override height incase it has been set
		}

		this.rootElement.style.minHeight = this._height;
	}

	// Static

	static _jQueryInterface( element )
	{
		const $element = $( element );
		let data = $element.data( DATA_KEY );

		if ( ! data ) {
			data = new Concord();
			$element.data( DATA_KEY, data );
		}

		data.load();
	}

}

/**
 * Module exports
 */
export default Concord;
