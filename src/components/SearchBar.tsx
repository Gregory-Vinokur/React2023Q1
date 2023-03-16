import React, { Component } from 'react';
import styles from '../css/components/SearchBar.module.css';

class SearchBar extends Component {
  state = {
    searchBarValue: localStorage.getItem('searchBarValue_GV')
      ? localStorage.getItem('searchBarValue_GV')
      : '',
  };

  componentWillUnmount() {
    localStorage.setItem('searchBarValue_GV', this.state.searchBarValue as string);
  }

  saveSearchBarValue = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState({
      searchBarValue: (e.target as HTMLInputElement).value,
    });
  };

  render() {
    return (
      <form className={styles.searchBar} onSubmit={this.saveSearchBarValue}>
        <i className={styles.searchIcon}></i>
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
