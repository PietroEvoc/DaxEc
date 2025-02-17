const Joi = require('joi');

// Define product schema for validation
const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().positive().precision(2).required(),
});

// Validate the product before upload
const validateProduct = (req, res, next) => {
  // Check if file is uploaded, we skip validation for the file here
  if (!req.body.name || !req.body.description || !req.body.price) {
    return res.status(400).json({ error: 'All fields (name, description, price) are required' });
  }

  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validateProduct;