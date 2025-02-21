const cloudinary = require('cloudinary').v2;
const Product = require('../models/Product');  // Import the Product model

// Configure Cloudinary (Ensure these are in your .env file)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();  // Fetch all products
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Check if file is received
    console.log('Uploaded File:', req.file);

    // Validate required fields
    // if (!name || !description || !price || !req.file) {
    //   return res.status(400).json({ error: 'Missing required fields (name, description, price, or image)' });
    // }

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'products',
    });

    console.log('Cloudinary Result:', result);

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