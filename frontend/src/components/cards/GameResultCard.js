import React, { useState } from 'react';
import styles from './GameResultCard.module.css';
import { colors } from '../../theme/colors';

/**
 * GameResultCard Component
 * Displays game results with 4 boxes for 4 times of the day
 * - Morning 6 AM
 * - Evening 6 PM  
 * - Night 9 PM
 * - Night 11 PM
 */
const GameResultCard = ({ date, results = [], onViewFullMonth }) => {
  const [expandedBox, setExpandedBox] = useState(null);

  const boxes = [
    { id: 'box1', time: '6 PM', label: 'Evening' },
    { id: 'box2', time: '9 PM', label: 'Night 1' },
    { id: 'box3', time: '11 PM', label: 'Night 2' },
    { id: 'box4', time: '6 AM', label: 'Morning' },
  ];

  const getBoxStatus = (boxId) => {
    const result = results.find((r) => r.box === boxId);
    return result?.status || 'waiting';
  };

  const getBoxResult = (boxId) => {
    const result = results.find((r) => r.box === boxId);
    return result?.result || null;
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'announced':
        return { borderColor: colors.accent1 };
      case 'waiting':
        return { borderColor: colors.border };
      default:
        return {};
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Today's Results</h3>
        <span className={styles.date}>{date}</span>
      </div>

      <div className={styles.boxesGrid}>
        {boxes.map((box) => {
          const status = getBoxStatus(box.id);
          const result = getBoxResult(box.id);

          return (
            <div
              key={box.id}
              className={`${styles.resultBox} ${styles[`box${status}`]}`}
              style={getStatusStyle(status)}
            >
              <div className={styles.boxTime}>{box.time}</div>
              <div className={styles.boxLabel}>{box.label}</div>

              {status === 'announced' && result ? (
                <div className={styles.result}>
                  <div className={styles.resultText}>{result}</div>
                </div>
              ) : status === 'waiting' ? (
                <div className={styles.waiting}>
                  <span>Waiting</span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {onViewFullMonth && (
        <button className={styles.viewButton} onClick={onViewFullMonth}>
          View Full Month Record
        </button>
      )}
    </div>
  );
};

export default GameResultCard;
