import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Label from './../../atoms/label/Label';
import Span from './../../atoms/typography/Span';

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  type: string;
  children?: React.ReactNode;
  className?: string;
  accept?: string;
  error?: string;
  register?: UseFormRegisterReturn<string>;
}

const InputWithLabel = ({
  text,
  type,
  children,
  className,
  error,
  register,
  ...rest
}: InputWithLabelProps) => {
  return (
    <Label>
      <Span>{text}</Span>
      <input type={type} className={className} {...register} {...rest} />
      {children}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </Label>
  );
};

export default InputWithLabel;
