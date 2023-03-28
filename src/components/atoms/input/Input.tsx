import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  type?: string;
  className?: string;
  accept?: string;
  value?: string;
}

const Input = ({ type, children, className, value, ...rest }: InputProps) => {
  return (
    <input
      type={type}
      className={className ? className : styles.input}
      value={value ? value : ''}
      {...rest}
    >
      {children}
    </input>
  );
};

export default Input;
