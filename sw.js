self.addEventListener('push', (event) => {
  const data = event.data.json() || {};
  const title = data.title || 'Push Notification';
  const options = {
    body: data.body || 'You have a new message.',
    icon: data.icon || '/180.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});