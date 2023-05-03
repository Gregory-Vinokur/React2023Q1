import React from 'react';
import styles from './Blackout.module.css';

interface BlackoutProps extends React.HTMLProps<HTMLDivElement> {
  onClose: () => void;
}

const Blackout = ({ onClose }: BlackoutProps) => {
  return <div className={styles.blackout} onClick={onClose} />;
};

export default Blackout;
