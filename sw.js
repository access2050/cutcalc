const CACHE_NAME = 'cutting-calc-v1.7.2-20260828-0930';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sw.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
