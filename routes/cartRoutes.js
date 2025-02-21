const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart, getCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming authMiddleware is used for user authentication

// Add product to cart
router.post('/add', authMiddleware, addToCart);

// Remove product from cart
router.delete('/remove/:productId', authMiddleware, removeFromCart);

// Get user's cart
router.get('/', authMiddleware, getCart);

module.exports = router;