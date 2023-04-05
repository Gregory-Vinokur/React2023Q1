import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={styles.indicator}>
      <div className={styles.spinner}></div>
      <div className={styles.text}>Progressing...</div>
    </div>
  );
};

export default ProgressBar;
