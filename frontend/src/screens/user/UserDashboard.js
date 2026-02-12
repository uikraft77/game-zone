import React, { useState, useEffect } from 'react';
import GameResultCard from '../../components/cards/GameResultCard';
import PredictionCard from '../../components/cards/PredictionCard';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { useUserData } from '../../context/UserDataContext';

/**
 * User Dashboard Screen
 * Main dashboard for regular users showing:
 * - 4 boxes with today's game results (6 PM, 9 PM, 11 PM, 6 AM)
 * - Astrologer predictions
 * - Ranking leaderboard
 */
const UserDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const { userDashboard, gameResults } = useUserData();
  
  const [selectedTab, setSelectedTab] = useState('results');

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{t('myDashboard')}</h1>
        <p>Welcome, {user?.name}!</p>
      </div>

      {/* Main Results Card */}
      <div className="results-section">
        <GameResultCard
          date={new Date().toLocaleDateString()}
          results={userDashboard.todayResults}
          onViewFullMonth={() => {
            // Navigate to full month results
          }}
        />
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-btn ${selectedTab === 'results' ? 'active' : ''}`}
          onClick={() => setSelectedTab('results')}
        >
          {t('gameResults')}
        </button>
        <button
          className={`tab-btn ${selectedTab === 'predictions' ? 'active' : ''}`}
          onClick={() => setSelectedTab('predictions')}
        >
          {t('predictions')}
        </button>
        <button
          className={`tab-btn ${selectedTab === 'myAstrologers' ? 'active' : ''}`}
          onClick={() => setSelectedTab('myAstrologers')}
        >
          {t('myAstrologers')}
        </button>
      </div>

      {/* Content */}
      <div className="tab-content">
        {selectedTab === 'results' && (
          <div className="results-content">
            {/* Past results here */}
            <p>{t('noData')}</p>
          </div>
        )}

        {selectedTab === 'predictions' && (
          <div className="predictions-content">
            {/* Astrologer predictions cards */}
            <p>{t('noData')}</p>
          </div>
        )}

        {selectedTab === 'myAstrologers' && (
          <div className="astrologers-content">
            {/* Subscribed astrologers */}
            <p>{t('noData')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
