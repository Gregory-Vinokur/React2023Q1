import React from 'react';
import styles from './CardFormPage.module.css';
import CardTemplate from '../../templates/Card/CardTemplate';
import { ICardFormPage } from './../../../interfaces/ICardFormPage';

const CardFormPage = ({ source, theme, name, surname, date, gender, desc }: ICardFormPage) => {
  return (
    <CardTemplate>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={source}></img>
      </div>
      <div className={styles.content}>
        <h2 className={styles.cardTitle}>Theme: {theme}</h2>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.cardFooter} role="status">
          <div className={styles.cardFooterItem}>
            <span>Gender:</span>
            <span className={styles.cardFooterItemText}>{gender}</span>
          </div>
          <div className={styles.cardFooterItem}>
            <span>Created by:</span>
            <span className={styles.cardFooterItemText}>{`${name} ${surname}`}</span>
          </div>
          <div className={styles.cardFooterItem}>
            <span>Date:</span>
            <span className={styles.cardFooterItemText}>{date}</span>
          </div>
        </div>
      </div>
    </CardTemplate>
  );
};

export default CardFormPage;
