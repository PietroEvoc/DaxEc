require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2; // Add Cloudinary
require('dotenv').config();
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/products'); // Add this line

const app = express();

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log('Cloudinary Configured:', process.env.CLOUD_NAME); // Log Cloudinary config to check if it is correct

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/products', productRoutes); // Add this line

app.get('/', (req, res) => {
  res.send('DaxDudes API is running! 🚀');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log('Env:', process.env);