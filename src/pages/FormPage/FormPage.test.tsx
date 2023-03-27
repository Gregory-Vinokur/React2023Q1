import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormPage from './FormPage';

describe('FormPage component test', () => {
  test('Renders the FormPage header', () => {
    render(<FormPage />);
    const header = screen.getByRole('heading', { level: 1 }) as HTMLElement;
    const headerText = screen.getByText('Form');
    expect(header).toBeDefined();
    expect(headerText).toBeDefined();
    expect(header).toContainElement(headerText);
  });
});
