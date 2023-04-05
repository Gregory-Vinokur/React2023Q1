import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Card from '../../components/organisms/CardHomePage/CardHomePage';
import SearchBar from './../../components/organisms/SearchBar/SearchBar';
import Header from './../../components/molecules/header/Header';
import { ICardHomePage } from '../../interfaces/ICardHomePage';
import { searchPhotos } from '../../data/searchPhotos';
import ProgressBar from './../../components/molecules/progress-bar/ProgressBar';

const Home = () => {
  const [searchResults, setSearchResults] = useState<ICardHomePage[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      if (searchTerm) {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const photos = await searchPhotos(searchTerm);
        setSearchResults([...photos]);
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [searchTerm]);

  const handleSearch = (searchTerm: string, results: ICardHomePage[]) => {
    setSearchTerm(searchTerm);
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
            <p>No results</p>
          ) : (
            searchResults.map((card, index) => <Card {...card} key={index} />)
          )}
        </div>
      )}
    </>
  );
};

export default Home;
