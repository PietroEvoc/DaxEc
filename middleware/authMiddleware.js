const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    // Verify the token using JWT_SECRET from .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user id to the request object (based on token structure)
    req.user = { id: decoded.id };

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid or expired token
    return res.status(401).json({ error: 'Token is not valid' });
  }
};