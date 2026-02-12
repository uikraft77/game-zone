import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Admin Dashboard
 * Super admin dashboard for managing:
 * - Game results announcement
 * - User management
 * - Astrologer management
 * - App settings
 */
const AdminDashboard = () => {
  const { t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState('announceResult');
  const [selectedGame, setSelectedGame] = useState('');
  const [resultNumbers, setResultNumbers] = useState('');

  const handleAnnounceResult = (e) => {
    e.preventDefault();
    // API call to announce result
    console.log('Announcing result for:', selectedGame, resultNumbers);
  };

  return (
    <div className="admin-dashboard-container">
      <div className="dashboard-header">
        <h1>{t('superAdmin')}</h1>
        <p>Game Zone Administration Panel</p>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-btn ${selectedTab === 'announceResult' ? 'active' : ''}`}
          onClick={() => setSelectedTab('announceResult')}
        >
          {t('announceResult')}
        </button>
        <button
          className={`tab-btn ${selectedTab === 'manageUsers' ? 'active' : ''}`}
          onClick={() => setSelectedTab('manageUsers')}
        >
          {t('manageUsers')}
        </button>
        <button
          className={`tab-btn ${selectedTab === 'manageAstrologers' ? 'active' : ''}`}
          onClick={() => setSelectedTab('manageAstrologers')}
        >
          {t('manageAstrologers')}
        </button>
        <button
          className={`tab-btn ${selectedTab === 'settings' ? 'active' : ''}`}
          onClick={() => setSelectedTab('settings')}
        >
          {t('appSettings')}
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {selectedTab === 'announceResult' && (
          <div className="announce-result-content">
            <h3>{t('announceResult')}</h3>
            <form onSubmit={handleAnnounceResult} className="announce-form">
              <div className="form-group">
                <label htmlFor="gameTime">{t('selectGameTime')}:</label>
                <select
                  id="gameTime"
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  required
                >
                  <option value="">-- {t('selectGameTime')} --</option>
                  <option value="morning_6am">6 AM Morning</option>
                  <option value="evening_6pm">6 PM Evening</option>
                  <option value="night_9pm">9 PM Night 1</option>
                  <option value="night_11pm">11 PM Night 2</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="resultNumber">{t('enterResultNumbers')}:</label>
                <input
                  id="resultNumber"
                  type="number"
                  min="1"
                  max="100"
                  value={resultNumbers}
                  onChange={(e) => setResultNumbers(e.target.value)}
                  placeholder="Enter a number from 1-100"
                  required
                />
                <small>Enter a single winning number for this game result</small>
              </div>

              <button type="submit" className="btn-primary btn-large">
                {t('announceResult')}
              </button>
            </form>
          </div>
        )}

        {selectedTab === 'manageUsers' && (
          <div className="manage-users-content">
            <h3>{t('manageUsers')}</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6" className="text-center">{t('noData')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'manageAstrologers' && (
          <div className="manage-astrologers-content">
            <h3>{t('manageAstrologers')}</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Astrologer ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6" className="text-center">{t('noData')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'settings' && (
          <div className="settings-content">
            <h3>{t('appSettings')}</h3>
            <form className="settings-form">
              <div className="form-group">
                <label htmlFor="appName">App Name:</label>
                <input
                  id="appName"
                  type="text"
                  defaultValue="GameZone"
                />
              </div>

              <div className="form-group">
                <label htmlFor="supportEmail">Support Email:</label>
                <input
                  id="supportEmail"
                  type="email"
                  defaultValue="support@gamezone.com"
                />
              </div>

              <button type="submit" className="btn-primary">
                {t('save')}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
