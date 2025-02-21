const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Ensure dotenv is loaded

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log('Cloudinary Configured:', cloudinary.config()); // Check if it prints correct values

module.exports = cloudinary;