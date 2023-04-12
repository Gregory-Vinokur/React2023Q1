import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './SearchBar/SearchBarSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
