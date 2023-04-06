import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import React from 'react';

describe('SearchBar component tests', () => {
  test('Render SearchBar component', () => {
    render(<SearchBar onSearch={() => {}} />);
    const form = screen.getByRole('textbox') as HTMLFormElement;
    expect(form).toBeDefined();
  });

  test('Input values in SearchBar component', () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'test value' } });
    expect(input.value).toBe('test value');
  });
});
