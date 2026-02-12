import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import AstrologerListCard from '../../components/cards/AstrologerListCard';

/**
 * Astrologers Listing Screen
 * Displays all available astrologers with filters and sorting
 */
const AstrologersListing = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [astrologers, setAstrologers] = useState([]);
  const [sortBy, setSortBy] = useState('rating');
  const [filterGame, setFilterGame] = useState('all');

  const handleSubscribe = (astrologerId) => {
    // Navigate to subscription plan selection
  };

  const handleViewProfile = (astrologerId) => {
    // Navigate to astrologer profile
  };

  const handleChat = (astrologerId) => {
    // Navigate to chat
  };

  return (
    <div className="astrologers-listing-container">
      <div className="header">
        <h1>{t('astrologers')}</h1>
        <p>{t('findAndHireServices')}</p>
      </div>

      {/* Filters & Sorting */}
      <div className="filters-section">
        <div className="filter-group">
          <label htmlFor="sort">{t('sort')}:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">{t('rating')}</option>
            <option value="accuracy">Accuracy</option>
            <option value="price">{t('price')}</option>
            <option value="experience">{t('experience')}</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="game">{t('games')}:</label>
          <select
            id="game"
            value={filterGame}
            onChange={(e) => setFilterGame(e.target.value)}
          >
            <option value="all">{t('all')}</option>
            <option value="game1">Game 1</option>
            <option value="game2">Game 2</option>
            <option value="game3">Game 3</option>
            <option value="game4">Game 4</option>
          </select>
        </div>
      </div>

      {/* Astrologers Grid */}
      <div className="astrologers-grid">
        {astrologers.length > 0 ? (
          astrologers.map((astrologer) => (
            <AstrologerListCard
              key={astrologer.id}
              astrologerName={astrologer.name}
              image={astrologer.profileImage}
              experience={astrologer.experience}
              games={astrologer.games}
              rating={astrologer.rating}
              totalRatings={astrologer.totalRatings}
              monthlyPassRatio={astrologer.monthlyPassRatio}
              weeklyPassRatio={astrologer.weeklyPassRatio}
              price={astrologer.monthlyPrice}
              isSubscribed={astrologer.isSubscribed}
              onSubscribe={() => handleSubscribe(astrologer.id)}
              onViewProfile={() => handleViewProfile(astrologer.id)}
              onChat={() => handleChat(astrologer.id)}
            />
          ))
        ) : (
          <div className="no-data">{t('noData')}</div>
        )}
      </div>
    </div>
  );
};

export default AstrologersListing;
