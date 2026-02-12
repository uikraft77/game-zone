import React from 'react';
import styles from './AstrologerListCard.module.css';

/**
 * AstrologerListCard Component
 * Card component to display astrologer in listings
 * Shows profile info, rating, price, and action buttons
 */
const AstrologerListCard = ({
  astrologerName,
  image,
  experience,
  games,
  rating,
  totalRatings,
  monthlyPassRatio,
  weeklyPassRatio,
  price,
  isSubscribed,
  onSubscribe,
  onViewProfile,
  onChat,
}) => {
  return (
    <div className={styles.card}>
      {/* Image */}
      <div className={styles.imageContainer}>
        <img src={image} alt={astrologerName} className={styles.image} />
        {isSubscribed && (
          <div className={styles.subscribedBadge}>Subscribed</div>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.name}>{astrologerName}</h3>

        <div className={styles.rating}>
          <span>⭐ {rating}</span>
          <span className={styles.count}>({totalRatings} reviews)</span>
        </div>

        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.label}>Experience:</span>
            <span className={styles.value}>{experience} years</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Games:</span>
            <span className={styles.value}>{games?.length || 0}</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Monthly Pass Ratio:</span>
            <span className={styles.value}>{monthlyPassRatio}%</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Weekly Pass Ratio:</span>
            <span className={styles.value}>{weeklyPassRatio}%</span>
          </div>
        </div>

        <div className={styles.price}>
          Price: <strong>₹{price} / month</strong>
        </div>

        <div className={styles.actions}>
          {isSubscribed ? (
            <>
              <button className={styles.btn} onClick={onChat}>
                💬 Chat
              </button>
              <button className={styles.btn} onClick={onViewProfile}>
                📋 Profile
              </button>
            </>
          ) : (
            <>
              <button
                className={`${styles.btn} ${styles.primaryBtn}`}
                onClick={onSubscribe}
              >
                Subscribe
              </button>
              <button className={styles.btn} onClick={onViewProfile}>
                View Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AstrologerListCard;
