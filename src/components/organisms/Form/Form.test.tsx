import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form component tests', () => {
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

  it('Form input fields can be filled in', () => {
    render(<Form createCard={() => {}} />);
    const nameInput = screen.getByLabelText('Name:');
    const surnameInput = screen.getByLabelText(/surname/i);
    const dateInput = screen.getByLabelText(/date/i);
    const themeSelect = screen.getByLabelText(/theme/i);
    const maleInput = screen.getByLabelText('Male');
    const femaleInput = screen.getByLabelText('Female');
    const descriptionInput = screen.getByLabelText(/description/i);
    const fileInput = screen.getByLabelText(/upload/i);
    const agreementCheckbox = screen.getByLabelText(/i agree to post a card/i);

    const nameValue = 'John';
    const surnameValue = 'Doe';
    const dateValue = '2023-03-27';
    const sportValue = 'Sport';
    const descriptionValue = 'This is a test description.';
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    fireEvent.change(nameInput, { target: { value: nameValue } });
    fireEvent.change(surnameInput, { target: { value: surnameValue } });
    fireEvent.change(dateInput, { target: { value: dateValue } });
    fireEvent.change(themeSelect, { target: { value: sportValue } });
    fireEvent.click(maleInput);
    fireEvent.change(descriptionInput, { target: { value: descriptionValue } });
    fireEvent.change(fileInput, { target: { files: [file] } });
    fireEvent.click(agreementCheckbox);

    expect((nameInput as HTMLInputElement).value).toBe(nameValue);
    expect((surnameInput as HTMLInputElement).value).toBe(surnameValue);
    expect((dateInput as HTMLInputElement).value).toBe(dateValue);
    expect((themeSelect as HTMLSelectElement).selectedOptions[0].value).toBe(sportValue);
    expect((maleInput as HTMLInputElement).checked).toBe(true);
    expect((femaleInput as HTMLInputElement).checked).toBe(false);
    expect((descriptionInput as HTMLTextAreaElement).value).toBe(descriptionValue);
    expect((fileInput as HTMLInputElement).files![0]).toStrictEqual(file);
    expect((agreementCheckbox as HTMLInputElement).checked).toBe(true);
  });
});
