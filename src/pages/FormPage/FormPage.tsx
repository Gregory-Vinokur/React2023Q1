import React, { Component } from 'react';
import styles from './FormPage.module.css';
import Form from '../../components/organisms/Form/Form';
import Header from '../../components/molecules/header/Header';
import { ICardFormPage } from './../../interfaces/ICardFormPage';
import CardFormPage from './../../components/organisms/CardFormPage/CardFormPage';
import Popup from './../../components/templates/Popup/Popup';

interface FormPageState {
  cards: ICardFormPage[];
  showPopup: boolean;
}

class FormPage extends Component {
  state: FormPageState;

  constructor(props: object) {
    super(props);

    this.state = {
      cards: [],
      showPopup: false,
    };
  }

  onCreate = (card: ICardFormPage) => {
    this.setState({
      showPopup: true,
      cards: [...this.state.cards, card],
    });
    setTimeout(() => {
      this.setState({ showPopup: false });
    }, 3000);
  };

  render() {
    return (
      <>
        <Header title="Form" />
        <Form createCard={this.onCreate} />
        {this.state.showPopup && <Popup message="Card created successfully!" />}
        <div className={styles.cardsContainer}>
          {this.state.cards.map((card, index) => (
            <CardFormPage {...card} key={index} />
          ))}
        </div>
      </>
    );
  }
}

export default FormPage;
