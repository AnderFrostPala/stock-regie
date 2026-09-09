const CACHE_NAME = 'regie-stock-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Laisse passer les requêtes réseau (notamment Google Apps Script)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
