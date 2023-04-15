import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './SearchBar/SearchBarSlice';
import formReducer from './Form/FormSlice';
import { unsplashApi } from './../data/api';

const store = configureStore({
  reducer: {
    search: searchReducer,
    form: formReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), unsplashApi.middleware],
});

export default store;
