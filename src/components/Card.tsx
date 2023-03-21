import React, { Component } from 'react';
import styles from '../css/components/Card.module.css';
import { ICard } from './../interfaces/ICard';
import CardButton from './CardButton';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import share from '../assets/share.svg';

class Card extends Component<ICard> {
  render() {
    const { color, likes, comments, shares, author, date } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <div className={styles.image} style={{ backgroundColor: `${color}` }}>
            Card Image
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.cardTitle}>Card Title</h2>
          <p className={styles.cardDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique velit velit, eu
            commodo purus ultricies quis. Donec vel ipsum semper, malesuada lectus ut, fringilla
            metus.
          </p>
          <div className={styles.cardButtons}>
            <CardButton cardButtonImg={like} cardButtonCounter={likes} />
            <CardButton cardButtonImg={comment} cardButtonCounter={comments} />
            <CardButton cardButtonImg={share} cardButtonCounter={shares} />
          </div>
          <div className={styles.cardFooter} role="status">
            <span>Created by: {author}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
