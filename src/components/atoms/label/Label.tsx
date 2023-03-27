import React, { Component } from 'react';
import styles from './Label.module.css';

type LabelProps = {
  children?: React.ReactNode;
};

class Label extends Component<LabelProps> {
  render() {
    const { children } = this.props;
    return <label className={styles.label}>{children}</label>;
  }
}

export default Label;
