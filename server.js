const express = require('express');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Middleware to parse JSON bodies
app.use(express.json());

// A simple endpoint to check if the server is running
app.get('/', (req, res) => {
  res.send('Cloudinary Deletion API is running!');
});

// The secure endpoint for deleting an image
app.post('/delete-image', async (req, res) => {
  // Extract the public_id from the request body
  const { public_id } = req.body;

  if (!public_id) {
    return res.status(400).json({ error: 'public_id is required' });
  }

  try {
    // Call the Cloudinary destroy method to delete the image
    const result = await cloudinary.uploader.destroy(public_id);

    // Check the result for success
    if (result.result === 'ok') {
      res.status(200).json({ message: 'Image deleted successfully' });
    } else {
      res.status(404).json({ error: 'Image not found or deletion failed' });
    }
  } catch (error) {
    console.error('Cloudinary deletion error:', error);
    res.status(500).json({ error: 'Internal server error during deletion' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});