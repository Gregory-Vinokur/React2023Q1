import React, { Component } from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

class Button extends Component<ButtonProps> {
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    );
  }
}

export default Button;
