import React, { useEffect } from 'react';
import styles from './SearchBar.module.css';
import Icon from './../../atoms/icon/Icon';
import search from '../../../assets/search.svg';
import Input from './../../atoms/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'interfaces/IState';
import { setSearchBarValue, setSearchTerm } from '../../../store/SearchBar/SearchBarSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchTerm, searchBarValue } = useSelector((state: IState) => state.search);

  useEffect(() => {
    dispatch(setSearchBarValue(searchTerm));
  }, [dispatch, searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchBarValue(event.target.value));
  };

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (searchBarValue !== searchTerm) {
      dispatch(setSearchTerm(searchBarValue));
    }
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
