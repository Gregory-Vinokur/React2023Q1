import React, { useState } from 'react';
import styles from './CardHomePage.module.css';
import { ICardHomePage } from '../../../interfaces/ICardHomePage';
import like from '../../../assets/like.svg';
import hashtag from '../../../assets/hashtag.svg';
import ButtonCard from '../../molecules/button-card/ButtonCard';
import CardTemplate from '../../templates/Card/CardTemplate';
import ModalCard from './../ModalCard/ModalCard';
import Blackout from '../../atoms/blackout/Blackout';

const Card = ({ url, likes, author, date, title, tags, description }: ICardHomePage) => {
  const [selectedCard, setSelectedCard] = useState<ICardHomePage | null>(null);

  const handleCardClick = (card: ICardHomePage | null) => {
    setSelectedCard(card);
  };

  return (
    <>
      <CardTemplate
        onClick={() => handleCardClick({ url, likes, author, date, title, tags, description })}
      >
        <div className={styles.imageContainer}>
          <img className={styles.image} src={url}></img>
        </div>
        <div className={styles.content}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <div className={styles.cardButtons}>
            <ButtonCard source={like} counter={likes} />
            <ButtonCard source={hashtag} counter={tags[0]} />
            <ButtonCard source={hashtag} counter={tags[1]} />
          </div>
          <div className={styles.cardFooter} role="status">
            <span>Created by: {author}</span>
            <span>{date}</span>
          </div>
        </div>
      </CardTemplate>
      {selectedCard && (
        <>
          <Blackout onClose={() => setSelectedCard(null)} />
          <ModalCard card={selectedCard} onClose={() => setSelectedCard(null)} />
        </>
      )}
    </>
  );
};

export default Card;
