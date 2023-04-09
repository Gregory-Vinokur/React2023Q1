import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Navigation menu test', () => {
  test('Render navigation menu', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const menu = screen.getByRole('navigation') as HTMLElement;
    expect(menu).toBeDefined();
  });
  test('Navigates to the about page', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    userEvent.click(screen.getByRole('link', { name: /about/i }));
  });
});
