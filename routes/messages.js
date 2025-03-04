const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Send a message
router.post('/send', async (req, res) => {
  try {
    const { sender, recipient, content } = req.body;

    if (!sender || !recipient || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const message = new Message({ sender, recipient, content });
    await message.save();
    res.status(201).json({ message: "Message sent successfully!" });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get conversation messages between a user and the artist
router.get('/conversation/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const messages = await Message.find({
      $or: [{ sender: email }, { recipient: email }]
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;