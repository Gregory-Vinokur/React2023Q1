import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../../store/SearchBar/SearchBarSlice';
import FormPage from './FormPage';
import { setCards } from '../../store/Form/FormSlice';
import { ICardFormPage } from './../../interfaces/ICardFormPage';

describe('FormPage component test', () => {
  test('Renders the FormPage header', () => {
    const mockStore = configureStore({
      reducer: {
        form: formReducer,
      },
    });
    const cards: ICardFormPage[] = [
      {
        source: 'https://example.com',
        theme: 'example',
        name: 'John',
        surname: 'Doe',
        date: '2022-04-12',
        gender: 'male',
        desc: 'Example description',
      },
    ];
    mockStore.dispatch(setCards(cards));
    render(
      <Provider store={mockStore}>
        <FormPage />
      </Provider>
    );
    const header = screen.getByRole('heading', { level: 1 }) as HTMLElement;
    const headerText = screen.getByText('Form');
    expect(header).toBeDefined();
    expect(headerText).toBeDefined();
    expect(header).toContainElement(headerText);
  });
});
