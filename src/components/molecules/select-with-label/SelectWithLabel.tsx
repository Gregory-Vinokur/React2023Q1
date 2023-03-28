import React from 'react';
import styles from './SelectWithLabel.module.css';
import Label from '../../atoms/label/Label';
import Span from '../../atoms/typography/Span';

type SelectProps = {
  options: SelectOption[];
  error?: string;
  selectRef?: React.RefObject<HTMLSelectElement>;
  text?: string;
};

type SelectOption = {
  value: string | number;
  label: string;
};

const SelectWithLabel = ({ options, selectRef, error, text }: SelectProps) => {
  return (
    <Label>
      <Span>{text}</Span>
      <select className={styles.select} ref={selectRef}>
        <option value="">Select the theme:</option>
        {options.map(({ value, label }) => {
          return <option key={value}>{label}</option>;
        })}
      </select>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </Label>
  );
};

export default SelectWithLabel;
