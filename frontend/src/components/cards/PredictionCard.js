import React from 'react';
import styles from './PredictionCard.module.css';
import { colors } from '../../theme/colors';

/**
 * PredictionCard Component
 * Displays astrologer's prediction cards with guessing numbers
 * Shows status (passed/failed), ratings, and user info
 */
const PredictionCard = ({
  astrologerName,
  astrologerImage,
  gameName,
  numbers,
  resultNumbers,
  status, // 'passed' | 'failed' | 'pending'
  rating,
  totalRatings,
  isSubscribed,
  onVisitProfile,
  onChat,
  onCall,
  onSubscribe,
}) => {
  const isPassed = status === 'passed';
  const isFailed = status === 'failed';

  const highlightedNumbers = numbers.map((num) => ({
    number: num,
    isMatch: resultNumbers && resultNumbers.includes(num),
  }));

  const matchCount = highlightedNumbers.filter((n) => n.isMatch).length;
  const matchPercentage = highlightedNumbers.length
    ? Math.round((matchCount / highlightedNumbers.length) * 100)
    : 0;

  return (
    <div
      className={`${styles.card} ${
        isPassed ? styles.cardPassed : isFailed ? styles.cardFailed : ''
      }`}
    >
      {/* Header */}
      <div className={styles.cardHeader}>
        <div className={styles.astrologerInfo}>
          <img
            src={astrologerImage}
            alt={astrologerName}
            className={styles.avatar}
          />
          <div>
            <h4>{astrologerName}</h4>
            <div className={styles.rating}>
              <span>⭐ {rating}</span>
              <span className={styles.ratingCount}>({totalRatings})</span>
            </div>
          </div>
        </div>

        {isPassed && (
          <div className={styles.badge} style={{ color: colors.success }}>
            ✓ Passed
          </div>
        )}
        {isFailed && (
          <div className={styles.badge} style={{ color: colors.error }}>
            ✗ Failed
          </div>
        )}
      </div>

      {/* Game Info */}
      <div className={styles.gameInfo}>
        <span className={styles.gameName}>{gameName}</span>
      </div>

      {/* Numbers */}
      <div className={styles.numbersSection}>
        <div className={styles.numberGrid}>
          {highlightedNumbers.map((item, index) => (
            <div
              key={index}
              className={`${styles.numberBox} ${
                item.isMatch ? styles.numberMatched : ''
              }`}
              style={
                item.isMatch
                  ? {
                      backgroundColor: colors.highlightNumber,
                      color: colors.textInverse,
                    }
                  : {}
              }
            >
              {item.number}
            </div>
          ))}
        </div>
        {resultNumbers && (
          <div className={styles.matchInfo}>
            <span>{matchCount} / {highlightedNumbers.length} matched ({matchPercentage}%)</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        {isSubscribed ? (
          <>
            <button
              className={styles.actionBtn}
              onClick={onChat}
              title="Send Message"
            >
              💬 Chat
            </button>
            <button
              className={styles.actionBtn}
              onClick={onCall}
              title="Make a Call"
            >
              ☎️ Call
            </button>
          </>
        ) : (
          <button
            className={`${styles.actionBtn} ${styles.subscribeBtn}`}
            onClick={onSubscribe}
          >
            Subscribe
          </button>
        )}
        <button className={styles.actionBtn} onClick={onVisitProfile}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default PredictionCard;
