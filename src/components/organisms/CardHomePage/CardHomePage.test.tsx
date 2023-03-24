import React from 'react';
import { render, screen } from '@testing-library/react';
import CardHomePage from './CardHomePage';
import '@testing-library/jest-dom';

describe('Cards tests', () => {
  test('Renders card with correct props', () => {
    const props = {
      color: 'red',
      likes: 10,
      comments: 5,
      shares: 2,
      author: 'John Doe',
      date: 'March 17, 2023',
    };

    render(<CardHomePage {...props} />);

    const cardImage = screen.getByText(/card image/i);
    const cardTitle = screen.getByText(/card title/i);
    const cardDesc = screen.getByText(/lorem ipsum/i);
    const cardButtons = screen.getAllByRole('button');
    const cardFooter = screen.getAllByRole('status');

    expect(cardImage).toHaveStyle('background-color: red');
    expect(cardTitle).toBeDefined();
    expect(cardDesc).toBeDefined();
    expect(cardFooter).toBeDefined();
    expect(cardButtons.length).toEqual(3);
    expect(cardButtons[0]).toHaveTextContent('10');
    expect(cardButtons[1]).toHaveTextContent('5');
    expect(cardButtons[2]).toHaveTextContent('2');
    expect(cardFooter[0]).toHaveTextContent('Created by: John Doe');
    expect(cardFooter[0]).toHaveTextContent('March 17, 2023');
  });
});
