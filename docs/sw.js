"use strict";

var dynamicCacheName = 'site-dynamic-v1';
var staticCacheName = 'site-static-v1';
var appShellFiles = []; // Cache size limit function

var limitCacheSize = function limitCacheSize(name, size) {
  caches.open(name).then(function (cache) {
    cache.keys().then(function (keys) {
      if (keys.length > size) {
        cache["delete"](keys[0]).then(limitCacheSize(name, size)); // recursion
      }
    });
  });
}; // Install service worker


self.addEventListener('install', function (event) {
  // debug
  console.log('[Service Worker] Install: %o', event); // Cache files

  event.waitUntil(caches.open(staticCacheName).then(function (cache) {
    // debug
    console.log('[Service Worker] Cache opened: %o', cache);
    return cache.addAll(appShellFiles);
  }));
}); // Activate service worker

self.addEventListener('activate', function (event) {
  // debug
  console.log('[Service Worker] Activate: %o', event); // Migrate caches

  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== staticCacheName && key !== dynamicCacheName;
    }).map(function (key) {
      return caches["delete"](key);
    }));
  }));
}); // Fetch events

self.addEventListener('fetch', function (event) {
  // debug
  console.log('[Service Worker] Fetch: %o', event); // Load resources

  event.respondWith(caches.match(event.request).then(function (cacheRes) {
    // debug
    console.log('[Service Worker] Fetching resource: %s', event.request.url);
    return cacheRes || // return cached resource if available
    fetch(event.request).then(function (fetchRes) {
      // handle successful requests
      return caches.open(dynamicCacheName).then(function (cache) {
        // debug
        console.log('[Service Worker] Caching dynamic resource: %s', event.request.url);

        if (event.request.url.indexOf('http') === 0) {
          cache.put(event.request.url, fetchRes.clone());
        }

        limitCacheSize(dynamicCacheName, 30);
        return fetchRes;
      });
    });
  })["catch"](function () {
    // handle failed page requests
    if (event.request.url.indexOf('.html') > -1) {
      return caches.match('/app/offline.html');
    }
  }));
});