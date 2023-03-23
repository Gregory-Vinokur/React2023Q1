import React, { Component } from 'react';
import styles from './SearchBar.module.css';
import Icon from './../../atoms/icon/Icon';
import search from '../../../assets/search.svg';

class SearchBar extends Component {
  state = {
    searchBarValue: localStorage.getItem('searchBarValue_GV')
      ? localStorage.getItem('searchBarValue_GV')
      : '',
  };

  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      window.localStorage.setItem('searchBarValue_GV', this.state.searchBarValue as string);
    });
  }

  componentWillUnmount() {
    localStorage.setItem('searchBarValue_GV', this.state.searchBarValue as string);
    window.removeEventListener('beforeunload', () => {
      window.localStorage.setItem('searchBarValue_GV', this.state.searchBarValue as string);
    });
  }

  saveSearchBarValue = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState({
      searchBarValue: (e.target as HTMLInputElement).value,
    });
  };

  handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newSearchBarValue = this.state.searchBarValue;
    this.setState({
      searchBarValue: newSearchBarValue,
    });
  };

  render() {
    return (
      <form className={styles.searchBar} onSubmit={this.handleFormSubmit}>
        <Icon source={search} />
        <input
          className={styles.searchInput}
          type="text"
          value={this.state.searchBarValue as string}
          onChange={this.saveSearchBarValue}
          placeholder="Search for cards..."
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
