import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import Home from './Home';

vi.mock('../../data/searchPhotos');

describe('Home page tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Renders the FormPage header', () => {
    render(<Home />);
    const header = screen.getByRole('heading', { level: 1 }) as HTMLElement;
    const headerText = screen.getByText('Home');
    expect(header).toBeDefined();
    expect(headerText).toBeDefined();
    expect(header).toContainElement(headerText);
  });

  test('Renders Home component with search bar and progress bar', () => {
    render(<Home />);
    const searchBar = screen.getByRole('textbox') as HTMLFormElement;
    const progressBar = screen.getByRole('progressbar');
    expect(searchBar).toBeInTheDocument();
    expect(progressBar).toBeInTheDocument();
  });

  test('Loads search term from local storage on mount', () => {
    localStorage.setItem('searchTerm', 'cat');
    render(<Home />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('cat');
  });
});
