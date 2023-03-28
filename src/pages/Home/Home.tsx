import React from 'react';
import styles from './Home.module.css';
import Card from '../../components/organisms/CardHomePage/CardHomePage';
import SearchBar from './../../components/organisms/SearchBar/SearchBar';
import cards from './../../data/cards';
import Header from './../../components/molecules/header/Header';

const Home = () => {
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
};

export default Home;
