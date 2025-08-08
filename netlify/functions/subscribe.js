exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { subscription } = JSON.parse(event.body);

  // In a real-world application, you would save this subscription
  // to a database. For now, we will just log it.
  console.log('Received a new subscription:', subscription);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Subscription received' }),
  };
};