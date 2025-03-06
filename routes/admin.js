const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

// Middleware to check if the user is an admin
const adminAuth = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ error: "Access denied. Admins only." });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

// Admin Dashboard Route
router.get("/dashboard", authMiddleware, adminAuth, (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard!" });
});

module.exports = router;