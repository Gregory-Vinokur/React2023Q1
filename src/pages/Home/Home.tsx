import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Card from '../../components/organisms/CardHomePage/CardHomePage';
import SearchBar from './../../components/organisms/SearchBar/SearchBar';
import Header from './../../components/molecules/header/Header';
import { ICardHomePage } from '../../interfaces/ICardHomePage';
import { searchPhotos } from '../../data/searchPhotos';
import ProgressBar from './../../components/molecules/progress-bar/ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'interfaces/IState';
import {
  setIsLoading,
  setSearchResults,
  setSearchTerm,
} from '../../store/SearchBar/SearchBarSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { searchResults, isLoading } = useSelector((state: IState) => state.search);

  useEffect(() => {
    const getPhotos = async () => {
      if (searchResults.length > 0) {
        dispatch(setIsLoading(true));
        await new Promise((resolve) => setTimeout(resolve, 1500));
        dispatch(setIsLoading(false));
      } else {
        const photos = await searchPhotos('cat');
        dispatch(setSearchResults([...photos]));
      }
      console.log(searchResults);
    };
    getPhotos();
  }, [dispatch, searchResults]);

  const handleSearch = (searchTerm: string, results: ICardHomePage[]) => {
    dispatch(setSearchTerm(searchTerm));
    setSearchResults(results);
  };

  return (
    <>
      <Header title="Home" />
      <SearchBar onSearch={handleSearch} />
      {isLoading && <ProgressBar />}
      {!isLoading && (
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
