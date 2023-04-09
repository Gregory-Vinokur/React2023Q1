import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

describe('MainLayout component test', () => {
  test('Clicking on NavLink should change its style to active', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    const homeNavLink = screen.getByText('Home');
    const aboutNavLink = screen.getByText('About');
    fireEvent.click(homeNavLink);
    expect(homeNavLink).toHaveClass('active');
    fireEvent.click(aboutNavLink);
    expect(homeNavLink).not.toHaveClass('active');
    expect(aboutNavLink).toHaveClass('active');
  });
});
