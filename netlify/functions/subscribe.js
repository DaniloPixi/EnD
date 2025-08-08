const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with credentials from Netlify environment variables
let serviceAccount;
try {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} catch (error) {
  console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT:", error);
  // Return an error response if the credentials are not set up correctly
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
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const subscription = JSON.parse(event.body);

    // Save the subscription to a Firestore collection
    await db.collection('subscriptions').add(subscription);

    console.log('Subscription saved successfully:', subscription);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscription received and saved' }),
    };

  } catch (error) {
    console.error('Failed to save subscription:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save subscription' }),
    };
  }
};