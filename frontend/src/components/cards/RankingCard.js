import React from 'react';
import styles from './RankingCard.module.css';

/**
 * RankingCard Component
 * Displays astrologer ranking leaderboard
 */
const RankingCard = ({ rank, astrologerName, image, accuracy, passRatio, rating, isTopThree }) => {
  const getMedalEmoji = (rank) => {
    switch (rank) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return `#${rank}`;
    }
  };

  return (
    <div className={`${styles.card} ${isTopThree ? styles.topThree : ''}`}>
      <div className={styles.rank}>{getMedalEmoji(rank)}</div>

      <img src={image} alt={astrologerName} className={styles.avatar} />

      <div className={styles.info}>
        <h4>{astrologerName}</h4>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.label}>Accuracy</span>
            <span className={styles.value}>{accuracy}%</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.label}>Pass Ratio</span>
            <span className={styles.value}>{passRatio}%</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.label}>Rating</span>
            <span className={styles.value}>⭐ {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingCard;
