import React from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={className}
      {...rest}
      onClick={(e: React.SyntheticEvent) => e.preventDefault()}
    >
      {children}
    </button>
  );
};

export default Button;
