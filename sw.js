const CACHE_NAME = 'takeover-v1';
const ASSETS = [
  './index.html',
  './logo.png',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('script.google.com')) return; // Don't cache API calls
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});