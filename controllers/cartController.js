const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add Product to Cart
const addProductToCart = async (req, res) => {
  const userId = req.user.id;
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId, status: 'active' });

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // If cart doesn't exist, create one
    if (!cart) {
      cart = new Cart({
        userId,
        products: [{ productId, quantity }],
        totalPrice: product.price * quantity,
      });
    } else {
      // Check if product is already in cart
      const productIndex = cart.products.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (productIndex > -1) {
        // Update quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        // Add new product to cart
        cart.products.push({ productId, quantity });
      }

      // Recalculate total price
      cart.totalPrice += product.price * quantity;
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id, status: 'active' }).populate('products.productId', 'name price');
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update Cart (Change Quantity)
const updateCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user.id, status: 'active' });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    // Find product in cart
    const productIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (productIndex > -1) {
      // Update quantity
      cart.products[productIndex].quantity = quantity;

      // Recalculate total price
      const product = await Product.findById(productId);
      cart.totalPrice = cart.products.reduce(
        (total, item) => total + item.quantity * product.price,
        0
      );

      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: 'Product not found in cart' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Remove Product from Cart
const removeProductFromCart = async (req, res) => {
  const { productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user.id, status: 'active' });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    cart.products = cart.products.filter(
      (item) => item.productId.toString() !== productId
    );

    // Recalculate total price
    const product = await Product.findById(productId);
    cart.totalPrice -= product.price;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Checkout
const checkoutCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id, status: 'active' });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    cart.status = 'completed';
    await cart.save();
    res.status(200).json({ message: 'Checkout successful', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  addProductToCart,
  getCart,
  updateCart,
  removeProductFromCart,
  checkoutCart,
};