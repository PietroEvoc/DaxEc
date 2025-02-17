const express = require('express');
const upload = require('../utils/multer');  // Import multer middleware for file uploads
const { getProducts, addProduct } = require('../controllers/productController');  // Import controller functions
const validateProduct = require('../middleware/validateProduct');  // Import validation middleware

const router = express.Router();

// Routes for Products
router.get('/', getProducts);  // GET all products

// POST route for adding a new product
// Validation happens first, then file upload and product creation
router.post('/', validateProduct, upload.single('image'), addProduct);  // Add new product

module.exports = router;