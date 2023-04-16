import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SearchBar from './SearchBar';
import searchReducer from '../../../store/SearchBar/SearchBarSlice';
import React from 'react';

describe('SearchBar component tests', () => {
  const mockStore = configureStore({
    reducer: {
      search: searchReducer,
    },
  });

  test('Render SearchBar component', () => {
    render(
      <Provider store={mockStore}>
        <SearchBar />
      </Provider>
    );
    const form = screen.getByRole('textbox') as HTMLFormElement;
    expect(form).toBeDefined();
  });

  test('Input values in SearchBar component', () => {
    render(
      <Provider store={mockStore}>
        <SearchBar />
      </Provider>
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'test value' } });
    expect(input.value).toBe('test value');
  });
});
