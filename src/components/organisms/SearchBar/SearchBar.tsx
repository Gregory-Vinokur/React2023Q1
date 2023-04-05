import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import Icon from './../../atoms/icon/Icon';
import search from '../../../assets/search.svg';
import Input from './../../atoms/input/Input';
import { searchPhotos } from '../../../data/searchPhotos';
import { ICardHomePage } from 'interfaces/ICardHomePage';

interface ISearchBarProps {
  onSearch: (searchTerm: string, results: ICardHomePage[]) => void;
}

const SearchBar = ({ onSearch }: ISearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(localStorage.getItem('searchTerm') || '');
  const [searchResults, setSearchResults] = useState<ICardHomePage[]>([]);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('searchTerm', searchTerm);
    });
    return () => {
      localStorage.setItem('searchTerm', searchTerm);
      window.removeEventListener('beforeunload', () => {
        localStorage.setItem('searchTerm', searchTerm);
      });
    };
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const photos = await searchPhotos(searchTerm);
    setSearchResults(photos);
    onSearch(searchTerm, searchResults);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleFormSubmit}>
      <Icon source={search} />
      <Input
        className={styles.searchInput}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for photos..."
      />
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
