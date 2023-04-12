import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './SearchBar/SearchBarSlice';
import formReducer from './Form/FormSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    form: formReducer,
  },
});

export default store;
