import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './SelectWithLabel.module.css';
import Label from '../../atoms/label/Label';
import Span from '../../atoms/typography/Span';
import Error from '../../atoms/error/Error';

type SelectProps = {
  options: SelectOption[];
  error?: string;
  text?: string;
  register?: UseFormRegisterReturn<string>;
};

type SelectOption = {
  value: string | number;
  label: string;
};

const SelectWithLabel = ({ options, error, text, register, ...rest }: SelectProps) => {
  return (
    <Label>
      <Span>{text}</Span>
      <select className={styles.select} {...register} {...rest}>
        <option value="">Select the theme:</option>
        {options.map(({ value, label }) => {
          return <option key={value}>{label}</option>;
        })}
      </select>
      {error && <Error error={error} />}
    </Label>
  );
};

export default SelectWithLabel;
