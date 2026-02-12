// API Service
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiCall = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const token = localStorage.getItem('token');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API Error');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth API calls
export const authAPI = {
  login: (email, password) =>
    apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  signup: (userData) =>
    apiCall('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  logout: () =>
    apiCall('/auth/logout', {
      method: 'POST',
    }),
};

// User API calls
export const userAPI = {
  getProfile: () => apiCall('/users/profile'),
  updateProfile: (data) =>
    apiCall('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  getDashboard: () => apiCall('/users/dashboard'),
  getSubscriptions: () => apiCall('/users/subscriptions'),
};

// Astrologer API calls
export const astrologerAPI = {
  getProfile: () => apiCall('/astrologers/profile'),
  updateProfile: (data) =>
    apiCall('/astrologers/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  publishCard: (cardData) =>
    apiCall('/astrologers/cards', {
      method: 'POST',
      body: JSON.stringify(cardData),
    }),
  getCards: () => apiCall('/astrologers/cards'),
  getRankings: () => apiCall('/astrologers/rankings'),
  getHistory: () => apiCall('/astrologers/history'),
};

// Game API calls
export const gameAPI = {
  getGameResults: () => apiCall('/games/results'),
  getTodayResults: () => apiCall('/games/results/today'),
  getAstrologerPredictions: () => apiCall('/games/predictions'),
  subscribeToAstrologer: (astrologerId, planDays) =>
    apiCall('/games/subscribe', {
      method: 'POST',
      body: JSON.stringify({ astrologerId, planDays }),
    }),
};

// Admin API calls
export const adminAPI = {
  announceResult: (gameData) =>
    apiCall('/admin/games/announce-result', {
      method: 'POST',
      body: JSON.stringify(gameData),
    }),
  getUsers: () => apiCall('/admin/users'),
  getAstrologers: () => apiCall('/admin/astrologers'),
  updateSettings: (settings) =>
    apiCall('/admin/settings', {
      method: 'PUT',
      body: JSON.stringify(settings),
    }),
};

export default {
  apiCall,
  authAPI,
  userAPI,
  astrologerAPI,
  gameAPI,
  adminAPI,
};
