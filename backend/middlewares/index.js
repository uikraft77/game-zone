// Authentication Middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify token
    // const decoded = jwt.verify(token, config.JWT_SECRET);
    // req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

// Role-based Access Control Middleware
const roleMiddleware = (requiredRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!requiredRoles.includes(req.user.userType)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
};

// Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { error: err }),
  });
};

// Request Validation Middleware
const validateRequest = (schema) => {
  return (req, res, next) => {
    // Validate request body against schema
    next();
  };
};

// Rate Limiting Middleware
const rateLimiter = (windowMs = 15 * 60 * 1000, maxRequests = 100) => {
  return (req, res, next) => {
    // Implement rate limiting logic
    next();
  };
};

// CORS Middleware
const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
};

module.exports = {
  authMiddleware,
  roleMiddleware,
  errorHandler,
  validateRequest,
  rateLimiter,
  corsMiddleware,
};
