self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('journal-cache-v1').then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/install.html',
        '/icon-192.png',
        '/icon-512.png',
      ])
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
