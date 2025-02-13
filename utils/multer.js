// utils/multer.js
const multer = require('multer');

// Memory storage to buffer image for Cloudinary upload
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;