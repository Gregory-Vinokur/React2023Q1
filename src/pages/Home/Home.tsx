import React, { Component } from 'react';
import styles from './Home.module.css';
import Card from './../../components/organisms/Card/Card';
import SearchBar from './../../components/organisms/SearchBar/SearchBar';
import cards from './../../data/cards';
import Header from './../../components/molecules/header/Header';

class Home extends Component {
  render() {
    return (
      <>
        <Header title="Home" />
        <SearchBar />
        <div data-testid="cards__container" className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </div>
      </>
    );
  }
}

export default Home;
