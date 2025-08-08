exports.handler = async (event, context) => {
  const vapidPublicKey = process.env.VAPID_PUBLIC_KEY;
  if (!vapidPublicKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "VAPID Public Key not configured." }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ publicKey: vapidPublicKey }),
  };
};