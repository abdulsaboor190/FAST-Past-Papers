const CACHE_NAME = 'fast-papers-v1.0';
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
  '/logo/logo2.PNG',
  '/logo/logo3.PNG',
  '/logo/icon-192.png',
  '/logo/icon-512.png',
  // Add your most important subject pages
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
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
