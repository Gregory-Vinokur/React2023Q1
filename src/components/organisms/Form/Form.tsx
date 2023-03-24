import React, { Component } from 'react';
import FormTemplate from './../../templates/Form/FormTemplate';
import InputWithLabel from './../../molecules/input-with-label/InputWithLabel';
import Select from './../../molecules/select/Select';
import styles from './../../atoms/input/Input.module.css';
import { ICardFormPage } from './../../../interfaces/ICardFormPage';

interface IFormProps {
  createCard: (card: ICardFormPage) => void;
}

class Form extends Component<IFormProps> {
  formRef: React.RefObject<HTMLFormElement>;
  nameRef: React.RefObject<HTMLInputElement>;
  surnameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  checkboxRef: React.RefObject<HTMLInputElement>;
  radioMaleRef: React.RefObject<HTMLInputElement>;
  radioFemaleRef: React.RefObject<HTMLInputElement>;
  fileRef: React.RefObject<HTMLInputElement>;

  constructor(props: IFormProps) {
    super(props);
    this.formRef = React.createRef();
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.dateRef = React.createRef();
    this.selectRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.radioMaleRef = React.createRef();
    this.radioFemaleRef = React.createRef();
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
      radio: (this.radioMaleRef.current ? this.radioMaleRef.current.checked : '')
        ? 'Male'
        : (this.radioFemaleRef.current ? this.radioFemaleRef.current.checked : '')
        ? 'Female'
        : '',
      file: this.fileRef.current?.files ? this.fileRef.current.files[0] : null,
    };
    const card: ICardFormPage = {
      source: formData.file ? URL.createObjectURL(formData.file) : '',
      theme: formData.select,
      name: formData.name,
      surname: formData.surname,
      date: formData.date,
      gender: formData.radio,
    };
    this.props.createCard(card);
    this.formRef.current?.reset();
  };

  render() {
    return (
      <FormTemplate onSubmit={this.handleSubmit} formRef={this.formRef}>
        <div>
          <InputWithLabel type="text" text="Name:" inputRef={this.nameRef} />
          <InputWithLabel type="text" text="Surname:" inputRef={this.surnameRef} />
        </div>
        <InputWithLabel type="date" text="Date:" inputRef={this.dateRef} />
        <Select
          options={[
            { value: 'option1', label: 'Sport' },
            { value: 'option2', label: 'Meme' },
            { value: 'option3', label: 'Cats' },
          ]}
          selectRef={this.selectRef}
        />
        <div>
          <InputWithLabel type="radio" className={styles.checkbox} inputRef={this.radioMaleRef}>
            Male
          </InputWithLabel>
          <InputWithLabel type="radio" className={styles.checkbox} inputRef={this.radioFemaleRef}>
            Female
          </InputWithLabel>
        </div>
        <InputWithLabel
          type="file"
          accept="image/jpeg,image/png,image/gif"
          className={styles.inputFile}
          inputRef={this.fileRef}
        >
          Upload an image for the card.
        </InputWithLabel>
        <InputWithLabel type="checkbox" className={styles.checkbox} inputRef={this.checkboxRef}>
          I agree to post a card.
        </InputWithLabel>
        <button type="submit">Create a card</button>
      </FormTemplate>
    );
  }
}

export default Form;
