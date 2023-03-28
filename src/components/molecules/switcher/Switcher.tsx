import React, { InputHTMLAttributes } from 'react';
import Label from './../../atoms/label/Label';
import Span from './../../atoms/typography/Span';
import styles from './Switcher.module.css';
import { UseFormRegisterReturn } from 'react-hook-form';

interface SwitcherProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  options: Array<string>;
  className?: string;
  error?: string;
  register?: UseFormRegisterReturn<string>;
}

const Switcher = ({ text, options, error, register }: SwitcherProps) => {
  return (
    <Label>
      {text && <Span>{text}</Span>}
      {options.map((option) => (
        <React.Fragment key={option}>
          <input
            className={styles.radio}
            type="radio"
            value={option}
            name={text}
            id={option}
            {...register}
          />
          <label htmlFor={option}>{option}</label>
        </React.Fragment>
      ))}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </Label>
  );
};

export default Switcher;
