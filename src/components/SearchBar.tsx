import React, { Component } from 'react';
import styles from '../css/components/SearchBar.module.css';

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

  handleFormSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const newSearchBarValue = (document.getElementById('searchBarInput') as HTMLInputElement).value;
    this.setState({
      searchBarValue: newSearchBarValue,
    });
  }

  render() {
    return (
      <form className={styles.searchBar} onSubmit={this.handleFormSubmit}>
        <i className={styles.searchIcon}></i>
        <input
          className={styles.searchInput}
          type="text"
          value={this.state.searchBarValue as string}
          onChange={this.saveSearchBarValue}
          placeholder="Search for cards..."
          id="searchBarInput"
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
