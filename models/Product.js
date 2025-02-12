const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  stock: { type: Number, required: true, default: 1 },
  category: { type: String, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);