import React, { useEffect } from 'react';

export interface ModalProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Modal = ({ children, className }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return <div className={className}>{children}</div>;
};

export default Modal;
