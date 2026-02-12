// Game Constants
export const GAME_TIMES = [
  { id: 1, name: 'Morning', time: '6 AM', box: 'box4' },
  { id: 2, name: 'Evening', time: '6 PM', box: 'box1' },
  { id: 3, name: 'Night 1', time: '9 PM', box: 'box2' },
  { id: 4, name: 'Night 2', time: '11 PM', box: 'box3' },
];

export const CARD_TEMPLATES = [
  { id: 1, name: '5 Numbers', count: 5 },
  { id: 2, name: '10 Numbers', count: 10 },
  { id: 3, name: '15 Numbers', count: 15 },
  { id: 4, name: '20 Numbers', count: 20 },
];

export const SUBSCRIPTION_PLANS = [
  { id: 1, days: 10, label: '10 Days' },
  { id: 2, days: 20, label: '20 Days' },
  { id: 3, days: 30, label: '30 Days' },
];

export const USER_TYPES = {
  USER: 'user',
  ASTROLOGER: 'astrologer',
  ADMIN: 'admin',
};

export const RESULT_STATUS = {
  WAITING: 'waiting',
  ANNOUNCED: 'announced',
  PASSED: 'passed',
  FAILED: 'failed',
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

export const POST_VISIBILITY = {
  PUBLIC: 'public',
  PRO_USERS: 'pro_users',
};

export default {
  GAME_TIMES,
  CARD_TEMPLATES,
  SUBSCRIPTION_PLANS,
  USER_TYPES,
  RESULT_STATUS,
  PAYMENT_STATUS,
  POST_VISIBILITY,
};
