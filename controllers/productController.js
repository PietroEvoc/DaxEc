// controllers/productController.js
const cloudinary = require('cloudinary').v2;
const Product = require('../models/Product');  // Import the Product model

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Get all products (if needed)
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'products',
    });

    // Create a new product in the database
    const product = new Product({
      name,
      description,
      price,
      image: result.secure_url,  // Store the Cloudinary URL of the uploaded image
    });

    // Save the product
    await product.save();

    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getProducts, addProduct };