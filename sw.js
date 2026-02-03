self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('catia-checker').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './icon.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
