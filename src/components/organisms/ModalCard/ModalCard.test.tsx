import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../../../store/SearchBar/SearchBarSlice';
import '@testing-library/jest-dom';
import ModalCard from './ModalCard';

describe('ModalCard', () => {
  const mockStore = configureStore({
    reducer: {
      search: searchReducer,
    },
  });
  const card = {
    title: 'Test Title',
    url: 'https://test.url/image.jpg',
    likes: 10,
    tags: ['test', 'tag'],
    author: 'Test Author',
    date: '2022-04-06',
  };

  const description = 'Test Description';

  it('should render the card data and close the modal when close button is clicked', () => {
    const onClose = vi.fn();
    render(
      <Provider store={mockStore}>
        <ModalCard description={description} card={card} onClose={onClose} />
      </Provider>
    );

    expect(screen.getByText(card.title)).toBeInTheDocument();
    expect(screen.getByAltText(card.title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(`Created by: ${card.author}`)).toBeInTheDocument();
    expect(screen.getByText(card.date)).toBeInTheDocument();
    expect(screen.getByText(card.likes)).toBeInTheDocument();
    expect(screen.getByText(card.tags[0])).toBeInTheDocument();
    expect(screen.getByText(card.tags[1])).toBeInTheDocument();

    const closeButton = screen.getByAltText('close button');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
