import React, { Component, InputHTMLAttributes } from 'react';
import Label from './../../atoms/label/Label';
import Span from './../../atoms/typography/Span';

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  type: string;
  children?: React.ReactNode;
  className?: string;
  accept?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

class InputWithLabel extends Component<InputWithLabelProps> {
  render() {
    const { text, type, children, className, inputRef, ...rest } = this.props;
    return (
      <Label>
        <Span>{text}</Span>
        <input type={type} className={className} ref={inputRef} {...rest} />
        {children}
      </Label>
    );
  }
}

export default InputWithLabel;
