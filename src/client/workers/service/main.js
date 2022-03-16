const dynamicCacheName = 'site-dynamic-v1';
const staticCacheName = 'site-static-v1';
const appShellFiles = [];

// Cache size limit function
const limitCacheSize = ( name, size ) => {
	caches
		.open( name )
		.then( cache => {
			cache
				.keys()
				.then( keys => {
					if ( keys.length > size )
					{
						cache
							.delete( keys[ 0 ] )
							.then( limitCacheSize( name, size ) ); // recursion
					}
				});
		});
};

// Install service worker
self.addEventListener( 'install', event => {
	// debug
	console.log( '[Service Worker] Install: %o', event );
	
	// Cache files
	event.waitUntil(
		caches
			.open( staticCacheName )
			.then(( cache ) => {
				// debug
				console.log( '[Service Worker] Cache opened: %o', cache );
				return cache.addAll( appShellFiles );
			})
	);
});

// Activate service worker
self.addEventListener( 'activate', event => {
	// debug
	console.log( '[Service Worker] Activate: %o', event );

	// Migrate caches
	event.waitUntil(
		caches
			.keys()
			.then( keys => {
				return Promise.all(
					keys
						.filter( key => key !== staticCacheName && key !== dynamicCacheName )
						.map( key => caches.delete( key ) )
				);
			})
	);
});

// Fetch events
self.addEventListener( 'fetch', event => {
	// debug
	console.log( '[Service Worker] Fetch: %o', event );

	// Load resources
	event.respondWith(
		caches
			.match( event.request )
			.then( cacheRes => {
				// debug
				console.log( '[Service Worker] Fetching resource: %s', event.request.url );
				return (
					cacheRes || // return cached resource if available
					fetch( event.request )
						.then( fetchRes => { // handle successful requests
							return (
								caches
									.open( dynamicCacheName )
									.then( cache => {
										// debug
										console.log( '[Service Worker] Caching dynamic resource: %s', event.request.url );

										if ( event.request.url.indexOf( 'http' ) === 0 ) {
											cache.put( event.request.url, fetchRes.clone() );
										}
										limitCacheSize( dynamicCacheName, 30 );
										
										return fetchRes;
									})
							);
						})
				);
			})
			.catch( () => {

				// handle failed page requests
				if ( event.request.url.indexOf( '.html' ) > -1 ) {
					return caches.match( '/app/offline.html' );
				}
			})
	);
});