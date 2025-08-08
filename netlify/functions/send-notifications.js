const webpush = require('web-push');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Your VAPID keys should be set as environment variables on Netlify
  const vapidPublicKey = process.env.VAPID_PUBLIC_KEY;
  const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;

  // Set the VAPID details
  webpush.setVapidDetails(
    'mailto:youremail@example.com', // Replace with your email
    vapidPublicKey,
    vapidPrivateKey
  );

  // This is a placeholder for a subscription object you would retrieve from a database
  const dummySubscription = JSON.parse(event.body);

  const payload = JSON.stringify({
    title: 'New Notification!',
    body: 'This is a test notification from your Netlify function.',
  });

  try {
    await webpush.sendNotification(dummySubscription, payload);
    console.log('Notification sent successfully!');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Notification sent' }),
    };
  } catch (error) {
    console.error('Failed to send notification:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send notification' }),
    };
  }
};