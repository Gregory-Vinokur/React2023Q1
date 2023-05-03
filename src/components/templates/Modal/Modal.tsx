import React from 'react';

export interface ModalProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Modal = ({ children, className }: ModalProps) => {
  return (
    <div data-testid="modal-card" className={className}>
      {children}
    </div>
  );
};

export default Modal;
