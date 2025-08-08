const admin = require('firebase-admin');
const webpush = require('web-push');

// Initialize Firebase Admin SDK
let serviceAccount;
try {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} catch (error) {
  console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT:", error);
  exports.handler = async () => ({
    statusCode: 500,
    body: 'Firebase credentials are not configured correctly.'
  });
  return;
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const vapidPublicKey = process.env.VAPID_PUBLIC_KEY;
  const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;

  if (!vapidPublicKey || !vapidPrivateKey) {
    return { statusCode: 500, body: 'VAPID keys not configured.' };
  }

  webpush.setVapidDetails(
    'mailto:youremail@example.com', // Replace with your email
    vapidPublicKey,
    vapidPrivateKey
  );

  try {
    // Retrieve all subscriptions from Firestore
    const subscriptionsRef = db.collection('subscriptions');
    const snapshot = await subscriptionsRef.get();

    const notifications = [];
    const payload = JSON.stringify({
      title: 'New Notification!',
      body: 'This is a test notification from your Netlify function.',
    });

    // Send a notification to each subscriber
    snapshot.forEach(doc => {
      const subscription = doc.data();
      notifications.push(webpush.sendNotification(subscription, payload));
    });

    await Promise.all(notifications);

    console.log('All notifications sent successfully!');
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Notifications sent to all subscribers' }),
    };

  } catch (error) {
    console.error('Failed to send notifications:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send notifications' }),
    };
  }
};