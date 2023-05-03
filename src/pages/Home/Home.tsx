import React from 'react';
import styles from './Home.module.css';
import Card from '../../components/organisms/CardHomePage/CardHomePage';
import SearchBar from './../../components/organisms/SearchBar/SearchBar';
import Header from './../../components/molecules/header/Header';
import ProgressBar from './../../components/molecules/progress-bar/ProgressBar';
import { useSelector } from 'react-redux';
import { IState } from 'interfaces/IState';
import { useSearchPhotosQuery } from '../../data/api';

const Home = () => {
  const { searchTerm } = useSelector((state: IState) => state.search);
  const { data: searchResults = [], isFetching } = useSearchPhotosQuery(
    searchTerm ? searchTerm : 'cat'
  );

  return (
    <>
      <Header title="Home" />
      <SearchBar />
      {isFetching && <ProgressBar />}
      {!isFetching && (
        <div data-testid="cards__container" className={styles.cardsContainer}>
          {searchResults.length === 0 ? (
            <p className={styles.noResultText}>No results</p>
          ) : (
            searchResults.map((card) => <Card {...card} key={card.id} />)
          )}
        </div>
      )}
    </>
  );
};

export default Home;
