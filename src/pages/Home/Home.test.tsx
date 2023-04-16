import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../../store/SearchBar/SearchBarSlice';
import Home from './Home';
import { unsplashApi } from './../../data/api';

describe('Home page tests', () => {
  const mockStore = configureStore({
    reducer: {
      search: searchReducer,
      [unsplashApi.reducerPath]: unsplashApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
  });

  test('Renders the FormPage header', () => {
    render(
      <Provider store={mockStore}>
        <Home />
      </Provider>
    );
    const header = screen.getByRole('heading', { level: 1 }) as HTMLElement;
    const headerText = screen.getByText('Home');
    expect(header).toBeDefined();
    expect(headerText).toBeDefined();
    expect(header).toContainElement(headerText);
  });

  test('Renders Home component with search bar and progress bar', () => {
    render(
      <Provider store={mockStore}>
        <Home />
      </Provider>
    );
    const searchBar = screen.getByRole('textbox') as HTMLFormElement;
    const progressBar = screen.getByRole('progressbar');
    expect(searchBar).toBeInTheDocument();
    expect(progressBar).toBeInTheDocument();
  });
});
