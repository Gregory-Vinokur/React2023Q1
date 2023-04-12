import React from 'react';
import styles from './FormPage.module.css';
import Form from '../../components/organisms/Form/Form';
import Header from '../../components/molecules/header/Header';
import { ICardFormPage } from './../../interfaces/ICardFormPage';
import CardFormPage from './../../components/organisms/CardFormPage/CardFormPage';
import Popup from './../../components/templates/Popup/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from './../../interfaces/IState';
import { setCards, setShowPopup } from '../../store/Form/FormSlice';

const FormPage = () => {
  const dispatch = useDispatch();
  const { cards, showPopup } = useSelector((state: IState) => state.form);

  const onCreate = (card: ICardFormPage) => {
    dispatch(setShowPopup(true));
    dispatch(setCards([...cards, card]));
    setTimeout(() => {
      dispatch(setShowPopup(false));
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
