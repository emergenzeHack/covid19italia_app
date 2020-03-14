self.addEventListener('install', (event) => {
    console.info('service-worker', 'install');
self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.info('service-worker', 'activate');
return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    e.respondWith(fetch(e.request));
});


// https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
// self.addEventListener('install', function(event) {
//     event.waitUntil(
//         caches.open(cacheName).then(function(cache) {
//             return cache.addAll(
//                 [
//                     '/css/bootstrap.css',
//                     '/css/main.css',
//                     '/js/bootstrap.min.js',
//                     '/js/jquery.min.js',
//                     '/offline.html'
//                 ]
//             );
//         })
//     );
// });

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         // Try the cache
//         caches.match(event.request).then(function(response) {
//             if (response) {
//                 return response;
//             }
//             return fetch(event.request).then(function(response) {
//                 if (response.status === 404) {
//                     return caches.match('pages/404.html');
//                 }
//                 return response
//             });
//         }).catch(function() {
//             // If both fail, show a generic fallback:
//             return caches.match('/offline.html');
//         })
//     );
// });
