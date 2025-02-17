const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get User Cart
const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Add Item to Cart
const addItemToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: req.user.id });

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const productPrice = product.price * quantity;

    if (cart) {
      const existingItem = cart.items.find(item => item.product.toString() === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
      cart.totalPrice += productPrice;
    } else {
      cart = new Cart({
        user: req.user.id,
        items: [{ product: productId, quantity }],
        totalPrice: productPrice,
      });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Remove Item from Cart
const removeItemFromCart = async (req, res) => {
  const { productId } = req.params;
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex > -1) {
      const item = cart.items[itemIndex];
      cart.totalPrice -= item.quantity * item.product.price;
      cart.items.splice(itemIndex, 1);
      await cart.save();
      return res.status(200).json(cart);
    }

    res.status(404).json({ error: 'Item not found in cart' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getUserCart,
  addItemToCart,
  removeItemFromCart,
};