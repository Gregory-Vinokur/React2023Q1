import React, { useEffect, useRef, useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState<string>(localStorage.getItem('searchTerm') || 'cat');
  const [searchBarValue, setSearchBarValue] = useState<string>(
    localStorage.getItem('searchTerm') || ''
  );
  const [searchResults, setSearchResults] = useState<ICardHomePage[]>([]);
  const searchInputRef = useRef(searchBarValue);

  useEffect(() => {
    const savedSearchBarValue = localStorage.getItem('searchTerm') || '';
    setSearchBarValue(savedSearchBarValue);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(searchInputRef.current);
    setSearchBarValue(event.target.value);
    searchInputRef.current = event.target.value;
  };

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const photos = await searchPhotos(searchTerm);
    setSearchResults(photos);
    onSearch(searchTerm, searchResults);
    localStorage.setItem('searchTerm', searchInputRef.current);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleFormSubmit}>
      <Icon source={search} />
      <Input
        className={styles.searchInput}
        type="text"
        value={searchBarValue}
        onChange={handleInputChange}
        placeholder="Type something. For example, 'dogs'"
      />
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
