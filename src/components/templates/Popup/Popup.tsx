import React from 'react';
import styles from './Popup.module.css';

type PopupProps = {
  message: string;
};

const Popup = ({ message }: PopupProps) => {
  return <div className={styles.popup}>{message}</div>;
};

export default Popup;
