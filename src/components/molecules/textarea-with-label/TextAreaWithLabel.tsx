import React, { TextareaHTMLAttributes } from 'react';
import Label from './../../atoms/label/Label';
import Span from './../../atoms/typography/Span';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextareaWithLabelProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  error?: string;
  register?: UseFormRegisterReturn<string>;
}

const TeaxtareaWithLabel = ({
  text,
  children,
  className,
  error,
  register,
  ...rest
}: TextareaWithLabelProps) => {
  return (
    <Label>
      <Span>{text}</Span>
      <textarea className={className} {...register} {...rest} />
      {children}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </Label>
  );
};

export default TeaxtareaWithLabel;
