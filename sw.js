// IMPORTANT: Change this version number EVERY time you make changes
const CACHE_VERSION = 'v1.2.0';  

const CACHE_NAME = `fast-papers-${CACHE_VERSION}`;

const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/components.css',
  '/css/responsive.css',
  '/css/subject.css',
  '/js/main.js',
  '/js/data.js',
  '/js/search.js',
  '/js/subject.js',
  '/js/subject-data.js',
  '/js/pwa.js',
  '/logo/logo2.PNG',
  '/logo/logo3.PNG',
  '/logo/icon-192.png',
  '/logo/icon-512.png',
  '/subjects/programming-fundamentals.html',
  '/subjects/programming-fundamentals-lab.html',
  '/subjects/calculus.html',
  '/subjects/applied-physics.html',
  '/subjects/functional-english.html',
  '/subjects/information-communication-technology.html',
  '/subjects/data-structures-algorithms.html',
  '/subjects/data-structures-lab.html',
  '/subjects/discrete-structures.html',
  '/subjects/linear-algebra.html',
  '/subjects/theory-of-automata.html',
  '/subjects/oop.html',
  '/subjects/oop-lab.html',
  '/subjects/computer-architecture.html',
  '/subjects/coal-lab.html',
  '/subjects/compiler-construction.html',
  '/subjects/digital-logic-design.html',
  '/subjects/information-security.html',
  '/subjects/operating-system.html',
  '/subjects/operation-research.html',
  '/subjects/ideology-constitution-pakistan.html',
  '/subjects/design-analysis-algorithms.html',
  '/subjects/database-system.html',
  '/subjects/computer-networks.html'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log(`[Service Worker] Installing version ${CACHE_VERSION}`);
  
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching all resources');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('[Service Worker] Cache failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log(`[Service Worker] Activating version ${CACHE_VERSION}`);
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete any cache that doesn't match the current version
          if (cacheName !== CACHE_NAME) {
            console.log(`[Service Worker] Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all pages immediately
      return self.clients.claim();
    })
  );
});

// Fetch event - Network First strategy with cache fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // Try network first
    fetch(event.request)
      .then((response) => {
        // If we got a valid response, clone it and update the cache
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // If network fails, try to serve from cache
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          // If not in cache either, return a custom offline page or error
          return new Response('Offline - Content not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});

// Listen for messages from the client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
