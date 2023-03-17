import React, { Component } from 'react';
import styles from '../css/components/CardButton.module.css';
import { ICardButton } from './../interfaces/ICardButton';

class CardButton extends Component<ICardButton> {
  render() {
    const { cardButtonImg, cardButtonCounter } = this.props;
    return (
      <button className={styles.cardButton}>
        <div className={styles.cardButtonImg} style={{ background: `url(${cardButtonImg})` }}></div>
        <div className={styles.cardButtonCounter}>{cardButtonCounter}</div>
      </button>
    );
  }
}

export default CardButton;
