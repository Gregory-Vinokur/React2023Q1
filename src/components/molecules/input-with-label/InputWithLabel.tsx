import React, { InputHTMLAttributes } from 'react';
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

const InputWithLabel = ({
  text,
  type,
  children,
  className,
  inputRef,
  error,
  ...rest
}: InputWithLabelProps) => {
  return (
    <Label>
      <Span>{text}</Span>
      <input type={type} className={className} ref={inputRef} {...rest} />
      {children}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </Label>
  );
};

export default InputWithLabel;
