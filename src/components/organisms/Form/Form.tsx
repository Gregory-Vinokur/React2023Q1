import React, { Component } from 'react';
import FormTemplate from './../../templates/Form/FormTemplate';
import InputWithLabel from './../../molecules/input-with-label/InputWithLabel';
import Select from './../../molecules/select/Select';
import styles from './../../atoms/input/Input.module.css';

class Form extends Component {
  render() {
    return (
      <FormTemplate>
        <div>
          <InputWithLabel type="text" text="Name:" />
          <InputWithLabel type="text" text="Surname:" />
        </div>
        <InputWithLabel type="date" text="Date:" />
        <Select
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
        />
        <div>
          <InputWithLabel type="radio" className={styles.checkbox}>
            Male
          </InputWithLabel>
          <InputWithLabel type="radio" className={styles.checkbox}>
            Female
          </InputWithLabel>
        </div>
        <InputWithLabel
          type="file"
          accept="image/jpeg,image/png,image/gif"
          className={styles.inputFile}
        >
          Upload an image for the card.
        </InputWithLabel>
        <InputWithLabel type="checkbox" className={styles.checkbox}>
          I agree to post a card.
        </InputWithLabel>
      </FormTemplate>
    );
  }
}

export default Form;
