// Register a service worker.
// Note: register() is not called by default.

const isLocalhost = Boolean(
	window.location.hostname === 'localhost' ||
	// [::1] is the IPv6 localhost address.
	window.location.hostname === '[::1]' ||
	// 127.0.0.1/8 is considered localhost for IPv4.
	window.location.hostname.match(
		/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
	)
);

/**
 * Check validity of a service worker before registration.
 * 
 * @param {string} swUrl 
 * @param {object} config 
 */
function checkValidServiceWorker( swUrl, config )
{
	// Check if the service worker can be found. If it can't reload the page.
	fetch( swUrl )
		.then( response => {
			// Ensure service worker exists, and that we really are getting a JS file.
			const contentType = response.headers.get( 'content-type' );
			if (
				response.status === 404 ||
				( contentType != null && contentType.indexOf( 'javascript' ) === -1 )
			) {
				// No service worker found. Probably a different app. Reload the page.
				navigator.serviceWorker.ready.then( registration => {
					registration.unregister().then( () => {
						window.location.reload();
					});
				});
			} else {
				// Service worker found. Proceed as normal.
				registerValidSW( swUrl, config );
			}
		})
		.catch( () => {
			console.log(
				'No internet connection found. App is running in offline mode.'
			);
		});
}

/**
 * Register service worker.
 * 
 * @param {object} config 
 * @return {void}
 */
function register( config )
{
	if ( 'serviceWorker' in navigator )
	{
		window.addEventListener( 'load', () => {
			const swUrl = `${config.public}sw.js`;

			if ( isLocalhost ) {
				// This is running on localhost. Let's check if a service worker still exists or not.
				checkValidServiceWorker( swUrl, config );

				// Add some additional logging to localhost, pointing developers to the
				// service worker/PWA documentation.
				navigator.serviceWorker.ready.then( () => {
					console.log(
						'This web app is being served cache-first by a service ' +
							'worker. To learn more, visit https://bit.ly/CRA-PWA'
					);
				});
			} else {
				// Is not localhost. Just register service worker
				registerValidSW( swUrl, config );
			}
		});
	}
}

/**
 * Register a valid service worker.
 * 
 * @param {string} swUrl 
 * @param {object} config 
 * @return {void}
 */
function registerValidSW( swUrl, config )
{
	navigator.serviceWorker
		.register( swUrl )
		.then( registration => {

			// Fires everytime the ServiceWorkerRegistration.installing property acquires a new service worker.
			registration.onupdatefound = () => {

				const installingWorker = registration.installing;

				if ( installingWorker == null ) {
					return;
				}

				// Fires everytime the ServiceWorker.state property changes.
				installingWorker.onstatechange = () => {
					if ( installingWorker.state === 'installed' )
					{
						if ( navigator.serviceWorker.controller ) {
							// At this point, the updated precached content has been fetched,
							// but the previous service worker will still serve the older
							// content until all client tabs are closed.
							console.log(
								'New content is available and will be used when all ' +
									'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
							);

							// Execute callback
							if ( config && config.onUpdate ) {
								config.onUpdate( registration );
							}
						} else {
							// At this point, everything has been precached.
							// It's the perfect time to display a
							// "Content is cached for offline use." message.
							console.log( 'Content is cached for offline use.' );

							// Execute callback
							if ( config && config.onSuccess ) {
								config.onSuccess( registration );
							}
						}
					}
				};
			};
		})
		.catch( error => {
			console.error( 'Error during service worker registration:', error );
		});
}

/**
 * Unregister a service worker.
 * 
 * @return {void}
 */
function unregister()
{
	if ( 'serviceWorker' in navigator )
	{
		navigator.serviceWorker.ready.then( registration => {
			registration.unregister();
		});
	}
}

export { register, unregister };