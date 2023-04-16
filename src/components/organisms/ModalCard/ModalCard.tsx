import React from 'react';
import { ICardHomePage } from '../../../interfaces/ICardHomePage';
import ButtonCard from './../../molecules/button-card/ButtonCard';
import like from '../../../assets/like.svg';
import hashtag from '../../../assets/hashtag.svg';
import close from '../../../assets/close.svg';
import styles from './ModalCard.module.css';
import Modal from '../../templates/Modal/Modal';
import ProgressBar from './../../molecules/progress-bar/ProgressBar';

const ModalCard = ({
  description,
  card,
  onClose,
}: {
  description: string;
  card: ICardHomePage;
  onClose: () => void;
}) => {
  return (
    <Modal className={styles.modalContainer} onClick={onClose}>
      <div className={styles.modalContent}>
        {!description && <ProgressBar />}
        {description && (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{card.title}</h2>
              <button className={styles.modalClose} onClick={onClose}>
                <img src={close} alt="close button" className={styles.closeItem} />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.imageContainer}>
                <img className={styles.modalImage} src={card.url} alt={card.title} />
              </div>
              <p className={styles.modalDescription}>{description}</p>
              <div className={styles.cardButtons}>
                <ButtonCard source={like} counter={card.likes} />
                {card.tags.map((tag, index) => (
                  <ButtonCard key={index} source={hashtag} counter={tag} />
                ))}
              </div>
            </div>
            <div className={styles.modalFooter}>
              <span>Created by: {card.author}</span>
              <span>{card.date}</span>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ModalCard;
