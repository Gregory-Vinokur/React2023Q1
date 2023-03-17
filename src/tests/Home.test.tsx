import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Home from './../pages/Home';
import cards from './../data/cards';

describe('Home component test', () => {
  test('Render all cards from the data', () => {
    render(<Home />);
    const cardsContainer = screen.getByTestId('cards__container');
    expect(cardsContainer.childNodes.length).toBe(cards.length);
  });
});
