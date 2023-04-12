import React, { useEffect } from 'react';
import styles from './SearchBar.module.css';
import Icon from './../../atoms/icon/Icon';
import search from '../../../assets/search.svg';
import Input from './../../atoms/input/Input';
import { searchPhotos } from '../../../data/searchPhotos';
import { ICardHomePage } from 'interfaces/ICardHomePage';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'interfaces/IState';
import {
  setSearchBarValue,
  setSearchResults,
  setSearchTerm,
} from '../../../store/SearchBar/SearchBarSlice';

interface ISearchBarProps {
  onSearch: (searchTerm: string, results: ICardHomePage[]) => void;
}

const SearchBar = ({ onSearch }: ISearchBarProps) => {
  const dispatch = useDispatch();
  const { searchTerm, searchBarValue } = useSelector((state: IState) => state.search);

  useEffect(() => {
    dispatch(setSearchBarValue(searchBarValue));
  }, [dispatch, searchBarValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchBarValue(event.target.value));
  };

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const photos = await searchPhotos(searchBarValue);
    dispatch(setSearchResults(photos));
    onSearch(searchBarValue, photos);
    dispatch(setSearchTerm(searchTerm));
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
