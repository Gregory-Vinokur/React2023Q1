import React from 'react';
import styles from './Span.module.css';

type SpanProps = {
  children?: React.ReactNode;
  className?: string;
};

const Span = ({ className, children }: SpanProps) => {
  return <span className={className ? className : styles.span}>{children}</span>;
};

export default Span;
