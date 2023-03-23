import React, { Component } from 'react';
import Label from './../../atoms/label/Label';
import Span from './../../atoms/typography/Span';
import Input from './../../atoms/input/Input';

type InputWithLabelProps = {
  text?: string;
  type: string;
  children?: React.ReactNode;
  className?: string;
  accept?: string;
};

class InputWithLabel extends Component<InputWithLabelProps> {
  render() {
    const { text, type, children, className, ...rest } = this.props;
    return (
      <Label>
        <Span>{text}</Span>
        <Input type={type} className={className} {...rest} />
        {children}
      </Label>
    );
  }
}

export default InputWithLabel;
