const CACHE_NAME = 'bamco-app-center-v13';
const APP_SHELL = [
  '/BAMCO-APP-CENTER/',
  '/BAMCO-APP-CENTER/index.html',
  '/BAMCO-APP-CENTER/manifest.webmanifest',
  '/BAMCO-APP-CENTER/bamco-logo-official.png',
  '/BAMCO-APP-CENTER/icons/bac-black-favicon-32.png',
  '/BAMCO-APP-CENTER/icons/bac-black-favicon-16.png',
  '/BAMCO-APP-CENTER/icons/bac-black-favicon.ico',
  '/BAMCO-APP-CENTER/icons/bac-black-apple-touch-180.png',
  '/BAMCO-APP-CENTER/icons/bac-black-app-192.png',
  '/BAMCO-APP-CENTER/icons/bac-black-app-512.png',
  '/BAMCO-APP-CENTER/icons/bac-black-maskable-512.png',
  '/BAMCO-APP-CENTER/fonts/Vazirmatn-Regular.woff2',
  '/BAMCO-APP-CENTER/fonts/Vazirmatn-Bold.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then(cached => cached || caches.match('/BAMCO-APP-CENTER/')))
  );
});
