/**
 * ---------------------------------------------------------------------------------
 * Spinner simple (v1.0.0):spinner-simple.js
 * Licensed under MIT
 * ---------------------------------------------------------------------------------
 */

import $ from 'jquery';
import { Util } from 'Util/bootstrap/v4';

import { StringMethods } from 'Util/helpers';
import { getCookies, setCookie } from 'Common/helpers';

/**
 * -----------------------------------------------------------------------------
 * Constants
 * -----------------------------------------------------------------------------
 */

const NAME = 'cookieDisclosure';
const VERSION = '1.0.0';
const DATA_KEY = 'promvc.cookie-disclosure';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const SELECTOR_DISMISS = '[data-dismiss="cookie"]';

const EVENT_CLOSE = `close${EVENT_KEY}`;
const EVENT_CLOSED = `closed${EVENT_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_HIDE = 'hide.bs.modal';

const CLASS_NAME_ALERT = 'c-cookie-disclosure';
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_SHOW = 'show';

/**
 * -----------------------------------------------------------------------------
 * Class definition
 * -----------------------------------------------------------------------------
 */

class CookieDisclosure
{
	constructor( element )
	{
		this._element = element;
		this._form = document.getElementById( 'cookieOptions' );
		this._modal = document.getElementById( 'cookie-preferences' );
		this._options = {
			ad: false, // advertising cookies
			es: true, // essential cookies
			ge: true, // general cookies
			pf: true, // performance and functionality cookies
		};

		if ( this._form ) {
			this._elements = this._form.elements;
		}

		// set cookie settings in DOM
		this.updateCurrentSettings();

		// register events
		this.registerEvents();
	}

	// Getters

	static get VERSION() {
		return VERSION;
	}

	// private

	_destroyElement( element )
	{
		$( element )
			.detach()
			.trigger( EVENT_CLOSED )
			.remove();
	}

	_getRootElement( element )
	{
		const selector = Util.getSelectorFromElement( element );
		let parent = false;

		if ( selector ) {
			parent = document.querySelector( selector );
		}

		if ( ! parent ) {
			parent = $( element ).closest( `.${CLASS_NAME_ALERT}` )[ 0 ];
		}

		return parent;
	}

	_removeElement( element )
	{
		const $el = $( element );

		$el.removeClass( CLASS_NAME_SHOW );

		if ( ! $el.hasClass( CLASS_NAME_FADE ) ) {
			this._destroyElement( element );
			return;
		}

		const transitionDuration = Util.getTransitionDurationFromElement( element );

		$( element )
			.one( Util.TRANSITION_END, event => this._destroyElement( element, event ) )
			.emulateTransitionEnd( transitionDuration );
	}

	_triggerCloseEvent( element )
	{
		const closeEvent = $.Event( EVENT_CLOSE );

		$( element ).trigger( closeEvent );
		return closeEvent;
	}

	// public

	close( element )
	{
		let rootElement = this._element;

		if ( element ) {
			rootElement = this._getRootElement( element );
		}

		const customEvent = this._triggerCloseEvent( rootElement );

		if ( customEvent.isDefaultPrevented() ) {
			return;
		}

		this._removeElement( rootElement );
	}

	generateCookieOptions( consent )
	{
		// console.log( 'Set cookie options...' );

		const age = 60 * 60 * 24 * 365; // 1 year
		const value = consent ? 'true' : 'false';

		let options = 'options=';

		if ( this._options.ge ) {
			options += 'ge';
		}

		if ( this._options.es ) {
			options += '+es';
		}

		if ( this._options.pf ) {
			options += '+pf';
		}

		if ( this._options.ad ) {
			options += '+ad';
		}

		setCookie( 'cookieConsent', 'value=' + value + '&' + options, age );
	}

	registerCookieActivity()
	{
		// console.log( 'Set cookie activity...' );

		const age = 60 * 60 * 24 * 365; // 1 year
		setCookie( 'hasSeenCookieDisclosure', 'true', age );
	}

	registerEvents()
	{
		const $this = this;

		if ( this._modal !== null )
		{
			this._optionsSave = document.getElementById( 'cookieOptionsSave' );
			$( this._optionsSave ).on(
				'click.promvc.save',
				function ( e ) {
					$this.updateCookieOptions( e.target );
				}
			);
		}
	}

	updateCurrentSettings()
	{
		const $this = this;
		this._cookies = getCookies();

		if ( this._cookies.cookieConsent !== undefined )
		{
			const options = (
				this._cookies.cookieConsent
					.split( '&' )
					.map( option => option.split( '=' ) )
					.reduce( ( accumulator, [ key, value ] ) => (
						{ ...accumulator, [ key.trim() ]: value }
					), {} )
			);

			if ( options.options !== undefined )
			{
				const setOptions = options.options.split( '+' );
				
				setOptions.forEach( function ( setting ) {
					const id = 'id' + StringMethods.ucfirst( setting ) + 'Cookie';
					if ( this._elements[ id ] !== undefined ) {
						this._elements[ id ].checked = true;
					}
				}, $this );
			}
		}
	}

	updateCookieOptions( element )
	{
		const el = document.querySelector( SELECTOR_DISMISS );
		const data = $( element ).data();

		if ( data.content !==  undefined && data.content === 'save preferences' )
		{
			for ( let option in this._options )
			{
				if ( ! Object.prototype.hasOwnProperty.call( this._options, option ) ) {
					continue;
				}

				const id = 'id' + StringMethods.ucfirst( option ) + 'Cookie';

				if ( this._elements[ id ] !== undefined ) {
					this._options[ option ] = this._elements[ id ].checked;
				}
			}

			// Update cookies
			this.registerCookieActivity();
			this.generateCookieOptions( true );

			// Close modal
			$( this._modal ).data( 'bs.modal' ).toggle( element );

			// Close cookie disclosure
			if ( el ) {
				this.close( el );
			}
		}
	}

	// static

	static _handleDismiss( cookieInstance, consent )
	{
		return function ( event ) {
			if ( event ) {
				event.preventDefault();
			}

			// Update cookies
			cookieInstance.registerCookieActivity();
			cookieInstance.generateCookieOptions( consent );

			// Close cookie disclosure
			cookieInstance.close( this );
		};
	}

	static _handlePreferences( cookieInstance )
	{
		return function ( event ) {
			const data = $( event.target ).data( 'content' );
			if ( data && data === 'cookie preferences' ) {
				// do something
			}
		};
	}

	static _jQueryInterface( element )
	{
		// Init

		const $element = $( element );
		let data = $element.data( DATA_KEY );

		if ( ! data ) {
			data = new CookieDisclosure();
			$element.data( DATA_KEY, data );
		}

		// Register events
		$( document )
			.on(
				EVENT_CLICK_DATA_API,
				SELECTOR_DISMISS,
				CookieDisclosure._handleDismiss( data, false )
			)
			.on(
				EVENT_CLICK_DATA_API,
				'[data-accept="cookie"]',
				CookieDisclosure._handleDismiss( data, true )
			)
			.on(
				EVENT_HIDE,
				CookieDisclosure._handlePreferences( data )
			);
	}
}

// Export

export default CookieDisclosure;