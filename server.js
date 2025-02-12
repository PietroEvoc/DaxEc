const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Security Middleware
app.use(helmet());

// CORS and JSON Parsing Middleware
app.use(cors());
app.use(express.json());

// Route Imports
const productRoutes = require("./routes/products"); 

// API Routes
app.use("/api/products", productRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("DaxDudes API is running! 🚀");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));