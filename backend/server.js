// Server configuration
const express = require('express');
const cors = require('cors');
const config = require('../config/config');
const connectDB = require('../config/database');
const {
  corsMiddleware,
  errorHandler,
  rateLimiter,
} = require('../middlewares');
const {
  authRoutes,
  gameRoutes,
  userRoutes,
  astrologerRoutes,
} = require('../routes');

// Initialize Express app
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(corsMiddleware);
app.use(rateLimiter());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/users', userRoutes);
app.use('/api/astrologers', astrologerRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Game Zone API is running' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error Handler (Must be last)
app.use(errorHandler);

// Start Server
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${config.NODE_ENV}`);
  console.log(`API Documentation: http://localhost:${PORT}/api-docs`);
});

module.exports = app;
