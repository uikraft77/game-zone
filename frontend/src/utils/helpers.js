// Common utility functions
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatTime = (time) => {
  return new Date(time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const calculateAccuracy = (passed, total) => {
  if (total === 0) return 0;
  return Math.round((passed / total) * 100);
};

export const getStatusColor = (status) => {
  const statusColors = {
    passed: 'success',
    failed: 'error',
    pending: 'warning',
    waiting: 'info',
  };
  return statusColors[status] || 'info';
};

export const highlightNumbers = (numbers, resultNumbers) => {
  return numbers.map((num) => ({
    ...num,
    isHighlight: resultNumbers.includes(num),
  }));
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validatePhoneNumber = (phone) => {
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

export default {
  formatDate,
  formatTime,
  formatCurrency,
  calculateAccuracy,
  getStatusColor,
  highlightNumbers,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
};
