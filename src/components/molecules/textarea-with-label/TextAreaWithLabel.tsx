import React, { Component, TextareaHTMLAttributes } from 'react';
import Label from './../../atoms/label/Label';
import Span from './../../atoms/typography/Span';

interface TextareaWithLabelProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  error?: string;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
}

class TeaxtareaWithLabel extends Component<TextareaWithLabelProps> {
  render() {
    const { text, children, className, textareaRef, error, ...rest } = this.props;
    return (
      <Label>
        <Span>{text}</Span>
        <textarea className={className} ref={textareaRef} {...rest} />
        {children}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </Label>
    );
  }
}

export default TeaxtareaWithLabel;
