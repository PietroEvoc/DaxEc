const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Cloud name from the Cloudinary dashboard
  api_key: process.env.CLOUDINARY_API_KEY,       // API key from the Cloudinary dashboard
  api_secret: process.env.CLOUDINARY_API_SECRET, // API secret from the Cloudinary dashboard
});

module.exports = cloudinary;