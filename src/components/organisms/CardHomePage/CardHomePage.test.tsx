import React from 'react';
import { render, screen } from '@testing-library/react';
import CardHomePage from './CardHomePage';
import '@testing-library/jest-dom';

describe('Cards tests', () => {
  test('Renders card with correct props', () => {
    const props = {
      id: '1',
      url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTM0NTN8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNjgwNjI5MDEz&ixlib=rb-4.0.3&q=80&w=1080',
      color: 'red',
      title: 'Title',
      description: ' Some description',
      tags: ['dog', 'good boy'],
      likes: 10,
      author: 'John Doe',
      date: 'March 17, 2023',
    };

    render(<CardHomePage {...props} />);

    const cardTitle = screen.getByText(/title/i);
    const cardImage = screen.getAllByRole('img');
    const cardButtons = screen.getAllByRole('button');
    const cardFooter = screen.getAllByRole('status');

    expect(cardTitle).toBeDefined();
    expect(cardImage[0]).toHaveAttribute('src', props.url);
    expect(cardFooter).toBeDefined();
    expect(cardButtons.length).toEqual(3);
    expect(cardButtons[0]).toHaveTextContent('10');
    expect(cardButtons[1]).toHaveTextContent('dog');
    expect(cardButtons[2]).toHaveTextContent('good boy');
    expect(cardFooter[0]).toHaveTextContent('Created by: John Doe');
    expect(cardFooter[0]).toHaveTextContent('March 17, 2023');
  });
});
