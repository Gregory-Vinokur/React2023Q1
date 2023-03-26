import React, { Component } from 'react';
import FormTemplate from './../../templates/Form/FormTemplate';
import InputWithLabel from './../../molecules/input-with-label/InputWithLabel';
import Select from './../../molecules/select/Select';
import styles from './../../atoms/input/Input.module.css';
import { ICardFormPage } from './../../../interfaces/ICardFormPage';
import { IFormData } from './../../../interfaces/IFormData';
import { IFormState } from './../../../interfaces/IFormState';
import TeaxtareaWithLabel from './../../molecules/textarea-with-label/TextAreaWithLabel';

interface IFormProps {
  createCard: (card: ICardFormPage) => void;
}

class Form extends Component<IFormProps, IFormState> {
  formRef: React.RefObject<HTMLFormElement>;
  nameRef: React.RefObject<HTMLInputElement>;
  surnameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  descRef: React.RefObject<HTMLTextAreaElement>;
  checkboxRef: React.RefObject<HTMLInputElement>;
  maleRadioRef: React.RefObject<HTMLInputElement>;
  femaleRadioRef: React.RefObject<HTMLInputElement>;
  fileRef: React.RefObject<HTMLInputElement>;

  constructor(props: IFormProps) {
    super(props);
    this.state = {
      errors: {},
    };
    this.formRef = React.createRef();
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.dateRef = React.createRef();
    this.selectRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.descRef = React.createRef();
    this.maleRadioRef = React.createRef();
    this.femaleRadioRef = React.createRef();
    this.fileRef = React.createRef();
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      name: this.nameRef.current ? this.nameRef.current.value : '',
      surname: this.surnameRef.current ? this.surnameRef.current.value : '',
      date: this.dateRef.current ? this.dateRef.current.value : '',
      select: this.selectRef.current ? this.selectRef.current.value : '',
      checkbox: this.checkboxRef.current ? this.checkboxRef.current.checked : '',
      desc: this.descRef.current ? this.descRef.current.value : '',
      radio: this.maleRadioRef.current?.checked
        ? 'Male'
        : this.femaleRadioRef.current?.checked
        ? 'Female'
        : '',
      file: this.fileRef.current?.files ? this.fileRef.current.files[0] : null,
    };
    const errors = this.validateForm(formData);
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      const card: ICardFormPage = {
        source: formData.file ? URL.createObjectURL(formData.file) : '',
        theme: formData.select,
        name: formData.name,
        surname: formData.surname,
        date: formData.date,
        gender: formData.radio,
        desc: formData.desc,
      };
      this.props.createCard(card);
      this.formRef.current?.reset();
      this.setState({ errors: {} });
    }
  };

  validateForm = (formData: IFormData) => {
    const errors: { [key: string]: string } = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    } else if (!/^[A-Z]/.test(formData.name)) {
      errors.name = 'Name must start with an uppercase letter';
    }

    if (!formData.surname) {
      errors.surname = 'Surname is required';
    } else if (!/^[A-Z]/.test(formData.surname)) {
      errors.surname = 'Surname must start with an uppercase letter';
    }

    if (!formData.date) {
      errors.date = 'Date is required';
    }

    if (!formData.select) {
      errors.select = 'Select is required';
    }

    if (!formData.radio) {
      errors.radio = 'Gender is required';
    }

    if (!formData.file) {
      errors.file = 'Choose af file';
    }

    if (!formData.desc) {
      errors.desc = 'Please, write something';
    }

    if (!formData.checkbox) {
      errors.checkbox = 'You must agree to post a card';
    }

    return errors;
  };

  render() {
    const { errors } = this.state;

    return (
      <FormTemplate onSubmit={this.handleSubmit} formRef={this.formRef}>
        <div>
          <InputWithLabel type="text" text="Name:" inputRef={this.nameRef} error={errors.name} />
          <InputWithLabel
            type="text"
            text="Surname:"
            inputRef={this.surnameRef}
            error={errors.surname}
          />
        </div>
        <InputWithLabel type="date" text="Date:" inputRef={this.dateRef} error={errors.date} />
        <Select
          options={[
            { value: 'option1', label: 'Sport' },
            { value: 'option2', label: 'Meme' },
            { value: 'option3', label: 'Cats' },
          ]}
          selectRef={this.selectRef}
          error={errors.select}
        />
        <div>
          <InputWithLabel
            className={styles.checkbox}
            type="radio"
            name="gender"
            value="Male"
            inputRef={this.maleRadioRef}
            error={errors.radio}
          >
            Male
          </InputWithLabel>
          <InputWithLabel
            className={styles.checkbox}
            type="radio"
            name="gender"
            value="Female"
            inputRef={this.femaleRadioRef}
          >
            Female
          </InputWithLabel>
        </div>
        <InputWithLabel
          type="file"
          accept="image/jpeg,image/png,image/gif"
          className={styles.inputFile}
          inputRef={this.fileRef}
          error={errors.file}
        >
          Upload an image for the card.
        </InputWithLabel>
        <TeaxtareaWithLabel text="Description:" textareaRef={this.descRef} error={errors.desc} />
        <InputWithLabel
          type="checkbox"
          className={styles.checkbox}
          inputRef={this.checkboxRef}
          error={errors.checkbox}
        >
          I agree to post a card.
        </InputWithLabel>
        <button type="submit">Create a card</button>
      </FormTemplate>
    );
  }
}

export default Form;
