import React, { TextareaHTMLAttributes } from 'react';
import Label from './../../atoms/label/Label';
import Span from './../../atoms/typography/Span';

interface TextareaWithLabelProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  error?: string;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
}

const TeaxtareaWithLabel = ({
  text,
  children,
  className,
  textareaRef,
  error,
  ...rest
}: TextareaWithLabelProps) => {
  return (
    <Label>
      <Span>{text}</Span>
      <textarea className={className} ref={textareaRef} {...rest} />
      {children}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </Label>
  );
};

export default TeaxtareaWithLabel;
