if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Scope will be restricted to the path where the service-worker-example.js file is located
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('Service Worker registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('Service Worker registration failed: ', registrationError);
      });
  });
}
