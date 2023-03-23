import React, { Component } from 'react';
import styles from './Span.module.css';

type SpanProps = {
  children?: React.ReactNode;
  className?: string;
};

class Span extends Component<SpanProps> {
  render() {
    const { className, children } = this.props;
    return <span className={className ? className : styles.span}>{children}</span>;
  }
}

export default Span;
