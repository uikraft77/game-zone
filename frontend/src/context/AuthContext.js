import React, { createContext, useContext, useState } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null); // 'user' | 'astrologer' | 'admin'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Login
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // API call here
      // const response = await loginAPI(email, password);
      // setUser(response.data.user);
      // setUserType(response.data.userType);
      // setIsAuthenticated(true);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Sign Up
  const signup = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      // API call here
      // const response = await signupAPI(userData);
      // setUser(response.data.user);
      // setUserType(userData.userType);
      // setIsAuthenticated(true);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setUserType(null);
    setError(null);
  };

  // Clear Error
  const clearError = () => {
    setError(null);
  };

  const value = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    userType,
    setUserType,
    loading,
    error,
    login,
    signup,
    logout,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export default AuthContext;
