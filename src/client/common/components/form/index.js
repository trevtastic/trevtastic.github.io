/**
 * ---------------------------------------------------------------------------------
 * Spinner simple (v1.0.0):spinner-simple.js
 * Licensed under MIT
 * ---------------------------------------------------------------------------------
 */

import $ from 'jquery';

import {
	validate,
	PromvcTogglePassword as TogglePassword,
	PromvcValidator as Validator
} from 'Util/modules';

/**
 * -----------------------------------------------------------------------------
 * Constants
 * -----------------------------------------------------------------------------
 */

const NAME = 'form';
const VERSION = '1.0.0';
const DATA_KEY = 'promvc.form';

/**
 * -----------------------------------------------------------------------------
 * Class definition
 * -----------------------------------------------------------------------------
 */

class Form
{
	/**
	 * The constructor
	 */
	constructor( element )
	{
		this._element = element;
		this._elements = [].slice.call( element.elements );
		this._options = {
			// debug: true, // dafault: false
			errorClass: 'invalid-feedback',
			errorPlacement: function ( error, el ) { // this = PromvcValidator
				error.appendTo( el.parents( '.o-form-group' ).children( '.o-form-feedback' )[ 0 ] );
			},
			highlight: function ( el, errorClass, validClass ) { // this = DevdocsValidator
				if ( el.classList.contains( validClass ) ) el.classList.remove( validClass );
				el.classList.add( this.settings.invalidClass );
			},
			invalidClass: 'is-invalid',
			invalidHandler: function ( event, validator ) { // this = form
				// do nothing for now
			},
			messages: {
				email: {
					required: 'Please fill in your email address.'
				},
			},
			rules: {
				email: {
					email: true,
					required: true
				}
			},
			// submitHandler: function ( form, event ) {
			// 	console.dir( form );
			// },
			successClass: 'valid-feedback',
			unhighlight: function ( el, errorClass, validClass ) { // this = PromvcValidator
				if ( el.classList.contains( this.settings.invalidClass ) ) el.classList.remove( this.settings.invalidClass );
			},
			validClass: 'is-valid'
		};
	}

	// public

	addValidators()
	{
		// Add password validator
		if ( Validator.methods[ 'password' ] === undefined )
		{
			Validator.addMethod( 'password', function ( value, element, param ) {
				if ( value !== '' )
				{
					if ( value.match( /.*[a-z]+.*/i ) == null ) {
						return false;
					}

					if ( value.match( /.*[0-9]+.*/ ) == null ) {
						return false;
					}
				}

				return true;
			}, 'Password must contain at least one letter and one number.' );
		}
	}

	authenticate()
	{
		let running = false;

		// Toggle input focus state
		for ( let element of this._elements )
		{
			if (
				element.nodeName === 'INPUT' &&
				(
					element.type === 'email' ||
					element.type === 'number' ||
					element.type === 'password' ||
					element.type === 'tel' ||
					element.type === 'text'
				)
			) {
				$( element ).on( `input.bs`, function ( e ) {
					if ( ! running ) // throttle event
					{
						running = true;

						if ( this.value !== '' ) {
							if ( ! this.classList.contains( 'hasText' ) ) {
								this.classList.add( 'hasText' );
							}
						} else {
							if ( this.classList.contains( 'hasText' ) ) {
								this.classList.remove( 'hasText' );
							}
						}

						running = false;
					}

					e.stopPropagation();
				});
			}
		}

		// Add custom validators
		this.addValidators();

		// Validate form elements
		this.validateElements();
	}

	validateElements( reset )
	{
		let prevalidator = $.data( this._element, 'validator' );

		if ( prevalidator )
		{
			prevalidator.destroy();

			if ( reset ) {
				return;
			}
		}

		validate( this._element, this._options );
	}

	// Static

	static _jQueryInterface( element )
	{
		const $element = $( element );
		let data = $element.data( DATA_KEY );

		if ( ! data ) {
			data = new Form( element );
			$element.data( DATA_KEY, data );
		}

		data.authenticate();
	}
}

// exports

export default Form;