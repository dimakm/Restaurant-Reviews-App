/*Creating an array with the files we want to cache*/
const filesToBeCached = [
      '/',
      '/css/main.css',
      '/js/dbhelper.js',
      '/js/main.js',
      '/js/restaurant_info.js',
      '/data/restaurants.json',
      '/img/1.jpg',
      '/img/2.jpg',
      '/img/3.jpg',
      '/img/4.jpg',
      '/img/5.jpg',
      '/img/6.jpg',
      '/img/7.jpg',
      '/img/8.jpg',
      '/img/9.jpg',
      '/img/10.jpg',
       '/img/',
      '/index.html',
      '/restaurant.html',
     ];

/*When the user hits the page an install event is triggered to cache the files.*/
self.addEventListener('install', function(event) {
   console.log('Trying to install service worker');
   event.waitUntil(
    caches.open('restaurant-reviews-app')
    .then(function(cache) {
     return cache.addAll(filesToBeCached)
     .then(function() {
      console.log('Finished caching files!');
     })
     .catch(function(error) {
      console.log('Ann error occured: ', error);
     })
   })
 );
});


/*We need it to pull the request from the cache,to make the application work offline*/
self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
 event.respondWith(
   caches.match(event.request)
   .then(function(response) {
     return response || fetch(event.request);
   })
 );
});  



