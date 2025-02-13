// routes/uploadRoute.js
const express = require('express');
const cloudinary = require('../config/cloudinary'); 
const Product = require('../models/Product'); 
const multer = require('multer');
const streamifier = require('streamifier');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Cloudinary upload stream
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      async (error, result) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Cloudinary upload failed' });
        }

        // Save product with image URL
        const newProduct = new Product({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          imageUrl: result.secure_url,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
      }
    );

    streamifier.createReadStream(req.file.buffer).pipe(stream);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;