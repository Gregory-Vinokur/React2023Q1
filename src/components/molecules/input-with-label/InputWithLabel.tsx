import React, { Component, InputHTMLAttributes } from 'react';
import Label from './../../atoms/label/Label';
import Span from './../../atoms/typography/Span';

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  type: string;
  children?: React.ReactNode;
  className?: string;
  accept?: string;
  error?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

class InputWithLabel extends Component<InputWithLabelProps> {
  render() {
    const { text, type, children, className, inputRef, error, ...rest } = this.props;
    return (
      <Label>
        <Span>{text}</Span>
        <input type={type} className={className} ref={inputRef} {...rest} />
        {children}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </Label>
    );
  }
}

export default InputWithLabel;
