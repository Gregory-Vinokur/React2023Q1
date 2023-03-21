import Card from './../components/Card';
import React, { Component } from 'react';
import SearchBar from './../components/SearchBar';
import cards from './../data/cards';
import styles from '../css/pages/Home.module.css';

class Home extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Home</h1>
        </header>
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
