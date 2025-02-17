const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const {
  getUserCart,
  addItemToCart,
  removeItemFromCart,
} = require('../controllers/cartController');

const router = express.Router();

router.get('/', authMiddleware, getUserCart);
router.post('/', authMiddleware, addItemToCart);
router.delete('/:productId', authMiddleware, removeItemFromCart);

module.exports = router;