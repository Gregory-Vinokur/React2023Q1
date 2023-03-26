import React from 'react';
import { screen, render } from '@testing-library/react';
import Form from './Form';

describe('Form tests', () => {
  it('Form component renders correctly', () => {
    render(<Form createCard={() => {}} />);
    expect(screen.queryByLabelText('name')).toBeDefined();
    expect(screen.queryByLabelText(/surname/i)).toBeDefined();
    expect(screen.queryByLabelText(/date/i)).toBeDefined();
    expect(screen.queryByLabelText(/sport/i)).toBeDefined();
    expect(screen.queryByLabelText('male')).toBeDefined();
    expect(screen.queryByLabelText('female')).toBeDefined();
    expect(screen.queryByLabelText(/upload/i)).toBeDefined();
    expect(screen.queryByText(/i agree to post a card/i)).toBeDefined();
    expect(screen.queryByLabelText(/description/i)).toBeDefined();
    expect(screen.queryByText(/create/i)).toBeDefined();
  });
});
