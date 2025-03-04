const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Log received data for debugging
  console.log("Register Request:", { name, email, password });

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(`Email already registered: ${email}`);  // Debugging email check
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Create new user (password will be hashed in the schema)
    const newUser = new User({ name, email, password });
    await newUser.save();
    console.log("New user created:", newUser);  // Debugging user creation

    // Generate token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    console.log("Generated token for user:", newUser._id);  // Debugging token generation

    res.status(201).json({ token, user: { id: newUser._id, name, email } });
  } catch (error) {
    console.error("Error in registerUser:", error);  // Debugging error
    res.status(500).json({ error: 'Server error' });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log("Login Request:", { email, password });  // Debugging login request

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`User not found for email: ${email}`);  // Debugging user lookup
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare password using the schema method
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log("Password mismatch for user:", email);  // Debugging password mismatch
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    console.log("Generated token for user:", user._id);  // Debugging token generation

    res.status(200).json({ token, user: { id: user._id, name: user.name, email } });
  } catch (error) {
    console.error("Error in loginUser:", error);  // Debugging error
    res.status(500).json({ error: 'Server error' });
  }
};

// Get User Profile
const getUserProfile = async (req, res) => {
  console.log("Fetching user profile for user:", req.user.id);  // Debugging profile fetch

  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      console.log("User not found:", req.user.id);  // Debugging user not found
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error in getUserProfile:", error);  // Debugging error
    res.status(500).json({ error: 'Server error' });
  }
};

// Update User Profile
const updateUserProfile = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Update request for user:", req.user.id, { name, email, password });  // Debugging update request

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      console.log("User not found:", req.user.id);  // Debugging user lookup
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user details
    if (name) user.name = name;
    if (email) {
      const emailExists = await User.findOne({ email });
      if (emailExists && emailExists._id.toString() !== user._id.toString()) {
        console.log("Email is already in use:", email);  // Debugging email in use
        return res.status(400).json({ error: 'Email is already in use' });
      }
      user.email = email;
    }
    if (password) {
      user.password = password; // Will be hashed in the schema
    }

    await user.save();
    console.log("User profile updated:", user);  // Debugging profile update
    res.status(200).json({ message: 'User profile updated', user });
  } catch (error) {
    console.error("Error in updateUserProfile:", error);  // Debugging error
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete User Profile
const deleteUserProfile = async (req, res) => {
  console.log("Delete request for user:", req.user.id);  // Debugging delete request

  try {
    const user = await User.findByIdAndDelete(req.user.id);
    if (!user) {
      console.log("User not found for deletion:", req.user.id);  // Debugging user not found for deletion
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User account deleted' });
  } catch (error) {
    console.error("Error in deleteUserProfile:", error);  // Debugging error
    res.status(500).json({ error: 'Server error' });
  }
};

// Change Password
const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  console.log("Change password request for user:", req.user.id);  // Debugging password change request

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      console.log("User not found for password change:", req.user.id);  // Debugging user lookup
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare old password
    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) {
      console.log("Incorrect old password for user:", req.user.id);  // Debugging incorrect old password
      return res.status(400).json({ error: 'Incorrect old password' });
    }

    // Update password
    user.password = newPassword; // Will be hashed in the schema
    await user.save();
    console.log("Password changed successfully for user:", req.user.id);  // Debugging password change success
    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error("Error in changePassword:", error);  // Debugging error
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  changePassword,
};