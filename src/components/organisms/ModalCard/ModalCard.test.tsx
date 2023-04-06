import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import ModalCard from './ModalCard';

describe('ModalCard', () => {
  const card = {
    title: 'Test Title',
    url: 'https://test.url/image.jpg',
    description: 'Test Description',
    likes: 10,
    tags: ['test', 'tag'],
    author: 'Test Author',
    date: '2022-04-06',
  };

  it('should render the card data and close the modal when close button is clicked', () => {
    const onClose = vi.fn();
    render(<ModalCard card={card} onClose={onClose} />);

    expect(screen.getByText(card.title)).toBeInTheDocument();
    expect(screen.getByAltText(card.title)).toBeInTheDocument();
    expect(screen.getByText(card.description)).toBeInTheDocument();
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
