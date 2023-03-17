import React from 'react';
import { render } from '@testing-library/react';
import About from './../pages/About';

describe('About component test', () => {
  test('Renders the About header', () => {
    const { getByText } = render(<About />);
    const headerElement = getByText(/About/i);
    expect(headerElement).toBeDefined();
  });
});
