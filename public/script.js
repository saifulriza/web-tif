window.onload = () => {
  'use strict';
  if ('serviceWorker' in navigator) {
    console.log('SW bersiap..');
    navigator.serviceWorker
      .register('sw.js', {
        scope: '.',
      })
      .then(function (registration) {
        var serviceWorker;
        if (registration.installing) {
          serviceWorker = registration.installing;
          console.log('SW installing');
        } else if (registration.waiting) {
          serviceWorker = registration.waiting;
          console.log('SW waiting');
        } else if (registration.active) {
          serviceWorker = registration.active;
          console.log('SW active');
        }
        if (serviceWorker) {
          // logState(serviceWorker.state);
          serviceWorker.addEventListener('statechange', function (e) {
            // logState(e.target.state);
          });
        }
      })
      .catch(function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
        console.log(error);
      });
  } else {
    // The current browser doesn't support service workers.
  }
};
