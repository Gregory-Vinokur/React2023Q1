import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import Icon from './../../atoms/icon/Icon';
import search from '../../../assets/search.svg';
import Input from './../../atoms/input/Input';

const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>(
    localStorage.getItem('searchBarValue_GV') || ''
  );

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('searchBarValue_GV', searchBarValue);
    });
    return () => {
      localStorage.setItem('searchBarValue_GV', searchBarValue);
      window.removeEventListener('beforeunload', () => {
        localStorage.setItem('searchBarValue_GV', searchBarValue);
      });
    };
  }, [searchBarValue]);

  const saveSearchBarValue = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchBarValue((e.target as HTMLInputElement).value);
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newSearchBarValue = searchBarValue;
    setSearchBarValue(newSearchBarValue);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleFormSubmit}>
      <Icon source={search} />
      <Input
        className={styles.searchInput}
        type="text"
        value={searchBarValue}
        onChange={saveSearchBarValue}
        placeholder="Search for cards..."
      />
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
