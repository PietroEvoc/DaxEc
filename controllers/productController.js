// controllers/productController.js
const streamifier = require('streamifier');
const cloudinary = require('../config/cloudinary');
const Product = require('../models/Product');

// Upload Product with Image
const addProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const stream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      async (error, result) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Cloudinary upload failed' });
        }

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
};

// Get All Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  addProduct,
  getProducts,
};