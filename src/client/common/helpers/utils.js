/**
 * Get current set cookies.
 * 
 * @return object
 */
export function getCookies()
{
	const cookies = document.cookie;

	if ( cookies === '' ) {
		return {};
	}

	return (
		cookies
			.split( ';' )
			.map( cookie => cookie.split( '=' ) )
			.reduce( ( accumulator, [ key, value ] ) => (
				{ ...accumulator, [ key.trim() ]: decodeURIComponent( value ) }
			), {} )
	);
}

/**
 * Get the transition duration of an element.
 * 
 * @param {*object} element 
 * @return int
 */
export function getTransitionDurationFromElement( element )
{
	if ( ! element ) {
		return 0;
	}

	let transitionDuration = element.style.transitionDuration,
		transitionDelay = element.style.transitionDelay,
		regex = /^\d+([a-z]+)/,
		duration,
		delay;

	const durationUnit = transitionDuration.match( regex );
	const delayUnit = transitionDelay.match( regex );

	const getValue = ( value, unit ) => {
		switch ( unit )
		{
			case 'ms':
				return parseFloat( value ) / 1000;
			case 's':
				return parseFloat( value );
			default:
				return 0;
		}
	};

	duration = durationUnit ? getValue( transitionDuration, durationUnit[ 1 ] ) : 0;
	delay = delayUnit ? getValue( transitionDelay, delayUnit[ 1 ] ) : 0;

	return delay + duration;
}

/**
 * Set a cookie in browser.
 * 
 * @param {*string}  key      The name of the cookie.
 * @param {*string}  value    The value to set for the cookie.
 * @param {*int}     lifetime The cookie expiry time in seconds.
 * @param {*boolean} secure   To only allow transmission of cookie over https.
 * @param {*string}  samesite The cookie cross site restrictions.
 * @param {*string}  domain   The domain or subdomain
 * @param {*string}  path     The path
 * @return void
 */
export function setCookie( key, value, lifetime, secure, samesite, domain, path )
{
	if ( typeof key !== 'string' || typeof value !== 'string' ) {
		return;
	}

	let params = key + '=' + encodeURIComponent( value );

	if ( lifetime && typeof lifetime === 'number' ) {
		params += '; max-age=' + lifetime;
	}

	if ( secure === true ) {
		params += '; secure';
	}

	if ( samesite && typeof samesite === 'string' ) {
		params += '; samesite=' + samesite;
	}

	if ( domain && typeof domain === 'string' ) {
		params += '; domain=' + domain;
	}

	if ( path && typeof path === 'string' ) {
		params += '; path=' + path;
	}

	document.cookie = params;
}
