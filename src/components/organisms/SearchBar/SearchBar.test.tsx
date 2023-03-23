import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import React from 'react';

describe('SearchBar component tests', () => {
  test('Render SearchBar component', () => {
    render(<SearchBar />);
    const form = screen.getByRole('textbox') as HTMLFormElement;
    expect(form).toBeDefined();
  });

  test('Input values in SearchBar component', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'test value' } });
    expect(input.value).toBe('test value');
  });

  test('Save input to local storage on component unmount', () => {
    const { unmount } = render(<SearchBar />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'test value' } });
    unmount();
    expect(localStorage.getItem('searchBarValue_GV')).toBe('test value');
  });
});
