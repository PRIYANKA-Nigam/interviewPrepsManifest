const CACHE_NAME = "ipi-v1";

const urlsToCache = [
  "/",
  "https://interviewprepforinsiders.blogspot.com/",
  "https://interviewprepforinsiders.blogspot.com/search",
  "https://interviewprepforinsiders.blogspot.com/p/make-payment-to-buy.html",
  "https://interviewprepforinsiders.blogspot.com/p/tech-programming-and-english-tutorials.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
