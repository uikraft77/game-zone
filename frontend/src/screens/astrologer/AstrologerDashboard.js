import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';

/**
 * Astrologer Dashboard
 * Main dashboard for astrologers (Kavi/Prediction experts)
 * - Profile setup
 * - Publish predictions/cards
 * - View rankings
 * - Monitor performance
 * - Chat & call management
 */
const AstrologerDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [selectedTab, setSelectedTab] = useState('overview');
  const [astrologerData] = useState({
    monthlyAccuracy: 75,
    passRatio: 68,
    ranking: 5,
    activeSubscribers: 24,
    thisMonthCards: 42,
    totalCards: 156,
  });

  return (
    <div className="astrologer-dashboard-container">
      <div className="dashboard-header">
        <h1>{t('myDashboard')}</h1>
        <div className="profile-quick-info">
          <img
            src={user?.profileImage}
            alt={user?.name}
            className="avatar"
          />
          <div>
            <h2>{user?.name}</h2>
            <p>Experience: {user?.experience} years</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{astrologerData.monthlyAccuracy}%</h3>
          <p>Monthly Accuracy</p>
        </div>
        <div className="stat-card">
          <h3>{astrologerData.passRatio}%</h3>
          <p>Pass Ratio</p>
        </div>
        <div className="stat-card">
          <h3>#{astrologerData.ranking}</h3>
          <p>Current Ranking</p>
        </div>
        <div className="stat-card">
          <h3>{astrologerData.activeSubscribers}</h3>
          <p>Active Subscribers</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-btn ${selectedTab === 'overview' ? 'active' : ''}`}
          onClick={() => setSelectedTab('overview')}
        >
          Overview
        </button>
        <button
          className={`tab-btn ${selectedTab === 'publishCard' ? 'active' : ''}`}
          onClick={() => setSelectedTab('publishCard')}
        >
          {t('publishPrediction')}
        </button>
        <button
          className={`tab-btn ${selectedTab === 'history' ? 'active' : ''}`}
          onClick={() => setSelectedTab('history')}
        >
          {t('history')}
        </button>
        <button
          className={`tab-btn ${selectedTab === 'earnings' ? 'active' : ''}`}
          onClick={() => setSelectedTab('earnings')}
        >
          Earnings
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {selectedTab === 'overview' && (
          <div className="overview-content">
            <div className="section">
              <h3>Recent Cards</h3>
              <p>Your last 10 cards posted</p>
            </div>
          </div>
        )}

        {selectedTab === 'publishCard' && (
          <div className="publish-card-content">
            <h3>{t('publishPrediction')}</h3>
            <form className="publish-form">
              <div className="form-group">
                <label htmlFor="game">{t('selectGame')}:</label>
                <select id="game">
                  <option value="">Select a game</option>
                  <option value="game1">Game 1</option>
                  <option value="game2">Game 2</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="template">{t('selectTemplate')}:</label>
                <select id="template">
                  <option value="">Select template</option>
                  <option value="5">5 Numbers</option>
                  <option value="10">10 Numbers</option>
                  <option value="15">15 Numbers</option>
                  <option value="20">20 Numbers</option>
                </select>
              </div>

              <div className="form-group">
                <label>Enter Numbers (1-100):</label>
                <div className="number-input-grid">
                  {/* Dynamic number input fields */}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="visibility">{t('publicPost')}:</label>
                <select id="visibility">
                  <option value="public">{t('publicPost')}</option>
                  <option value="pro">{t('proUserPost')}</option>
                </select>
              </div>

              <button type="submit" className="btn-primary">
                {t('publishPrediction')}
              </button>
            </form>
          </div>
        )}

        {selectedTab === 'history' && (
          <div className="history-content">
            <h3>Card History</h3>
            <p>Your prediction history and performance</p>
          </div>
        )}

        {selectedTab === 'earnings' && (
          <div className="earnings-content">
            <h3>Earnings & Withdrawals</h3>
            <p>Track your earnings from subscriptions</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AstrologerDashboard;
