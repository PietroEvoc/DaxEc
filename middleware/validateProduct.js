const Joi = require('joi');

// Define product schema for validation
const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().positive().precision(2).required(),
});

const validateProduct = (req, res, next) => {
  console.log("Request Body:", req.body); // Log the request body
  console.log("Request File:", req.file); // Log the uploaded file

  // Ensure req.body is populated (multer should handle this)
  if (!req.body.name || !req.body.description || !req.body.price) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validateProduct;