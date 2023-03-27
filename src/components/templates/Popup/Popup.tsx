import React, { Component } from 'react';
import styles from './Popup.module.css';

type PopupProps = {
  message: string;
};

class Popup extends Component<PopupProps> {
  render() {
    const { message } = this.props;
    return <div className={styles.popup}>{message}</div>;
  }
}

export default Popup;
