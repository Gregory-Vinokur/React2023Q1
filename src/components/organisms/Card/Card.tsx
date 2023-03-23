import React, { Component } from 'react';
import styles from './Card.module.css';
import { ICard } from '../../../interfaces/ICard';
import like from '../../../assets/like.svg';
import comment from '../../../assets/comment.svg';
import share from '../../../assets/share.svg';
import ButtonCard from '../../molecules/button-card/ButtonCard';
import CardTemplate from './../../templates/Card/CardTemplate';

class Card extends Component<ICard> {
  render() {
    const { color, likes, comments, shares, author, date } = this.props;
    return (
      <CardTemplate>
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
            <ButtonCard source={like} counter={likes} />
            <ButtonCard source={comment} counter={comments} />
            <ButtonCard source={share} counter={shares} />
          </div>
          <div className={styles.cardFooter} role="status">
            <span>Created by: {author}</span>
            <span>{date}</span>
          </div>
        </div>
      </CardTemplate>
    );
  }
}

export default Card;
