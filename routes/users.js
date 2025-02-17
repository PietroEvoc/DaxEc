const express = require('express');
const { body, validationResult } = require('express-validator');
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  changePassword,
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Auth Middleware for protected routes

const router = express.Router();

// Register Route
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  registerUser
);

// Login Route
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  loginUser
);

// Get User Profile (Protected)
router.get('/profile', authMiddleware, getUserProfile);

// Update User Profile (Protected)
router.put('/profile', authMiddleware, updateUserProfile);

// Delete User Account (Protected)
router.delete('/profile', authMiddleware, deleteUserProfile);

// Change Password (Protected)
router.put('/change-password', authMiddleware, changePassword);

module.exports = router;