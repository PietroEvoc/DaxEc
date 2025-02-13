const express = require('express');
const upload = require('../utils/multer');
const { getProducts, addProduct } = require('../controllers/productController');  // Correct the method name here
const validateProduct = require('../middleware/validateProduct');

const router = express.Router();

// Routes for Products
router.get('/', getProducts);  // Ensure this is using getProducts, not getAllProducts
router.post('/', upload.single('image'), validateProduct, addProduct);

module.exports = router;