const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add product to cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id; // Assuming you're using authentication middleware to get the user ID

  try {
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Find or create the user's cart
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({
        user: userId,
        products: [{ product: productId, quantity }]
      });
    } else {
      // Check if the product is already in the cart
      const existingProductIndex = cart.products.findIndex(item => item.product.toString() === productId);

      if (existingProductIndex > -1) {
        // Update quantity if the product is already in the cart
        cart.products[existingProductIndex].quantity += quantity;
      } else {
        // Add new product to the cart
        cart.products.push({ product: productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json({ message: 'Product added to cart', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add product to cart' });
  }
};

// Remove product from cart
exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex(item => item.product.toString() === productId);
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not in cart' });
    }

    cart.products.splice(productIndex, 1); // Remove the product from the cart
    await cart.save();
    res.status(200).json({ message: 'Product removed from cart', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to remove product from cart' });
  }
};

// Get user's cart
exports.getCart = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ user: userId }).populate('products.product');
    if (!cart) {
      return res.status(404).json({ error: 'Cart is empty' });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
};