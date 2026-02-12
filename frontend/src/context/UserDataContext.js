import React, { createContext, useContext, useState } from 'react';

// Create User Data Context
const UserDataContext = createContext();

// User Data Provider Component
export const UserDataProvider = ({ children }) => {
  const [userDashboard, setUserDashboard] = useState({
    todayResults: [
      { time: '6 PM', status: 'waiting', result: null, box: 'box1' },
      { time: '9 PM', status: 'waiting', result: null, box: 'box2' },
      { time: '11 PM', status: 'waiting', result: null, box: 'box3' },
      { time: '6 AM', status: 'waiting', result: null, box: 'box4' },
    ],
    subscriptions: [],
    myAstrologers: [],
  });

  const [astrologerData, setAstrologerData] = useState({
    profile: null,
    cards: [],
    rankings: null,
    history: [],
  });

  const [gameResults, setGameResults] = useState({
    todayResults: [],
    pastResults: [],
  });

  const updateUserDashboard = (data) => {
    setUserDashboard((prev) => ({ ...prev, ...data }));
  };

  const updateAstrologerData = (data) => {
    setAstrologerData((prev) => ({ ...prev, ...data }));
  };

  const updateGameResults = (data) => {
    setGameResults((prev) => ({ ...prev, ...data }));
  };

  const value = {
    userDashboard,
    updateUserDashboard,
    astrologerData,
    updateAstrologerData,
    gameResults,
    updateGameResults,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

// Custom Hook to use User Data Context
export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error('useUserData must be used within UserDataProvider');
  }
  return context;
};

export default UserDataContext;
