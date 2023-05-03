import React from 'react';
import { render, screen } from '@testing-library/react';
import CardFormPage from './CardFormPage';
import '@testing-library/jest-dom';

describe('CardFormPage component', () => {
  it('renders card information correctly', () => {
    const props = {
      source: 'test-image-url',
      theme: 'Test Theme',
      name: 'John',
      surname: 'Doe',
      date: '2023-03-27',
      gender: 'Male',
      desc: 'This is a test description.',
    };
    render(<CardFormPage {...props} />);
    const cardImage = screen.getByRole('img');
    expect(cardImage).toHaveAttribute('src', props.source);

    const cardTitle = screen.getByText(`Theme: ${props.theme}`);
    expect(cardTitle).toBeInTheDocument();

    const cardDesc = screen.getByText(props.desc);
    expect(cardDesc).toBeInTheDocument();

    const cardGender = screen.getByText(`${props.gender}`);
    expect(cardGender).toBeInTheDocument();

    const cardAuthor = screen.getByText(`${props.name} ${props.surname}`);
    expect(cardAuthor).toBeInTheDocument();

    const cardDate = screen.getByText(`${props.date}`);
    expect(cardDate).toBeInTheDocument();
  });
});
