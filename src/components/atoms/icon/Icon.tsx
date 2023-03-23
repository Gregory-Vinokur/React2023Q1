import React, { Component } from 'react';
import styles from './Icon.module.css';

type IconProps = {
  source: string;
};

class Icon extends Component<IconProps> {
  render() {
    const { source } = this.props;
    return <i className={styles.icon} style={{ background: `url(${source})` }}></i>;
  }
}

export default Icon;
