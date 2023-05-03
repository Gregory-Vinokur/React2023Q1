import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound component test', () => {
  test('Renders 404 header', () => {
    render(<NotFound />);
    const header = screen.getByRole('heading', { level: 1 }) as HTMLElement;
    const headerText = screen.getByText('404');
    expect(header).toBeDefined();
    expect(headerText).toBeDefined();
    expect(header).toContainElement(headerText);
  });
  test('Redirects to 404 page if user input invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/bad-path']}>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('404');
  });
});
