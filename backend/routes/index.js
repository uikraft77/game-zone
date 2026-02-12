const express = require('express');
const {
  authController,
  gameController,
  userController,
  astrologerController,
} = require('../controllers');
const {
  authMiddleware,
  roleMiddleware,
} = require('../middlewares');

// Auth Routes
const authRoutes = express.Router();
authRoutes.post('/login', authController.login);
authRoutes.post('/signup', authController.signup);
authRoutes.post('/logout', authMiddleware, authController.logout);
authRoutes.post('/refresh-token', authController.refreshToken);

// Game Routes
const gameRoutes = express.Router();
gameRoutes.get('/results', gameController.getGameResults);
gameRoutes.get('/results/today', gameController.getTodayResults);
gameRoutes.post(
  '/announce-result',
  authMiddleware,
  roleMiddleware(['admin']),
  gameController.announceResult
);

// User Routes
const userRoutes = express.Router();
userRoutes.get(
  '/profile',
  authMiddleware,
  roleMiddleware(['user']),
  userController.getProfile
);
userRoutes.put(
  '/profile',
  authMiddleware,
  roleMiddleware(['user']),
  userController.updateProfile
);
userRoutes.get(
  '/dashboard',
  authMiddleware,
  roleMiddleware(['user']),
  userController.getDashboard
);

// Astrologer Routes
const astrologerRoutes = express.Router();
astrologerRoutes.get(
  '/profile',
  authMiddleware,
  roleMiddleware(['astrologer']),
  astrologerController.getProfile
);
astrologerRoutes.post(
  '/cards',
  authMiddleware,
  roleMiddleware(['astrologer']),
  astrologerController.publishCard
);
astrologerRoutes.get('/rankings', astrologerController.getRankings);

module.exports = {
  authRoutes,
  gameRoutes,
  userRoutes,
  astrologerRoutes,
};
