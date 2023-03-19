import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './../pages/About';

describe('About component test', () => {
  test('Renders the About header', () => {
    render(<About />);
    const header = screen.getByRole('heading', { level: 1 }) as HTMLElement;
    const headerText = screen.getByText('About');
    expect(header).toBeDefined();
    expect(headerText).toBeDefined();
    expect(header).toContainElement(headerText);
  });
});
