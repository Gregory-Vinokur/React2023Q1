import React from 'react';
import FormTemplate from './../../templates/Form/FormTemplate';
import InputWithLabel from './../../molecules/input-with-label/InputWithLabel';
import SelectWithLabel from '../../molecules/select-with-label/SelectWithLabel';
import styles from './../../atoms/input/Input.module.css';
import { ICardFormPage } from './../../../interfaces/ICardFormPage';
import { IFormData } from './../../../interfaces/IFormData';
import TeaxtareaWithLabel from './../../molecules/textarea-with-label/TextAreaWithLabel';
import Switcher from './../../molecules/switcher/Switcher';
import { useForm } from 'react-hook-form';

interface IFormProps {
  createCard: (card: ICardFormPage) => void;
}

const Form = ({ createCard }: IFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({ reValidateMode: 'onSubmit' });

  const onSubmit = (data: IFormData) => {
    const files = data.file;
    const file = data.file ? files[0] : null;
    const picture = file ? URL.createObjectURL(file) : '';
    const card: ICardFormPage = {
      source: picture,
      theme: data.select,
      name: data.name,
      surname: data.surname,
      date: data.date,
      gender: data.radio,
      desc: data.desc,
    };
    createCard(card);
    reset();
  };

  return (
    <FormTemplate onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputWithLabel
          type="text"
          text="Name:"
          register={register('name', {
            required: 'Name is required',
            pattern: {
              value: /^[A-Z]/,
              message: 'Name must start with an uppercase letter',
            },
          })}
          error={errors.name?.message}
        />
        <InputWithLabel
          type="text"
          text="Surname:"
          register={register('surname', {
            required: 'Surname is required',
            pattern: {
              value: /^[A-Z]/,
              message: 'Surname must start with an uppercase letter',
            },
          })}
          error={errors.surname?.message}
        />
      </div>
      <InputWithLabel
        type="date"
        text="Date:"
        register={register('date', { required: 'Date is required' })}
        error={errors.date?.message}
      />
      <SelectWithLabel
        options={[
          { value: 'option1', label: 'Sport' },
          { value: 'option2', label: 'Meme' },
          { value: 'option3', label: 'Cats' },
        ]}
        text="Theme:"
        register={register('select', { required: 'Select is required' })}
        error={errors.select?.message}
      />
      <Switcher
        text="Gender:"
        options={['Male', 'Female']}
        error={errors.radio?.message}
        register={register('radio', { required: 'Gender is required' })}
      />
      <InputWithLabel
        text="Upload an image for the card."
        type="file"
        accept="image/jpeg,image/png,image/gif,image/svg+xml"
        className={styles.inputFile}
        register={register('file', {
          required: 'Choose a file',
          validate: {
            isImage: (value) => {
              const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
              const file = value[0];
              if (!allowedImageTypes.includes(file.type)) {
                return 'Only image files are allowed';
              }
              return true;
            },
          },
        })}
        error={errors.file?.message}
      />
      <TeaxtareaWithLabel
        text="Description:"
        register={register('desc', {
          required: 'Please, write something',
          pattern: {
            value: /^\S.*$/,
            message: 'Description must not start with a space',
          },
        })}
        error={errors.desc?.message}
      />
      <InputWithLabel
        type="checkbox"
        className={styles.checkbox}
        register={register('checkbox', { required: 'You must agree to post a card' })}
        error={errors.checkbox?.message}
      >
        I agree to post a card.
      </InputWithLabel>
      <button type="submit">Create a card</button>
    </FormTemplate>
  );
};

export default Form;
