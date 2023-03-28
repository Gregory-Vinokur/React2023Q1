import React, { useState } from 'react';
import styles from './FormPage.module.css';
import Form from '../../components/organisms/Form/Form';
import Header from '../../components/molecules/header/Header';
import { ICardFormPage } from './../../interfaces/ICardFormPage';
import CardFormPage from './../../components/organisms/CardFormPage/CardFormPage';
import Popup from './../../components/templates/Popup/Popup';

const FormPage = () => {
  const [cards, setCards] = useState<ICardFormPage[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const onCreate = (card: ICardFormPage) => {
    setShowPopup(true);
    setCards([...cards, card]);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <Header title="Form" />
      <Form createCard={onCreate} />
      {showPopup && <Popup message="Card created successfully!" />}
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <CardFormPage {...card} key={index} />
        ))}
      </div>
    </>
  );
};

export default FormPage;
