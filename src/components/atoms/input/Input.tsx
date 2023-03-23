import React, { Component } from 'react';
import styles from './Input.module.css';

export type InputProps = {
  children?: React.ReactNode;
  type?: string;
  className?: string;
  accept?: string;
};

class Input extends Component<InputProps> {
  render() {
    const { type, children, className, ...rest } = this.props;
    return (
      <input type={type} className={className ? className : styles.input} {...rest}>
        {children}
      </input>
    );
  }
}

export default Input;
