import React, { Component, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  type?: string;
  className?: string;
  accept?: string;
  value?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

class Input extends Component<InputProps> {
  render() {
    const { type, children, className, value, ...rest } = this.props;
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
  }
}

export default Input;
