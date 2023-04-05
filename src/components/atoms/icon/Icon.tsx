import React from 'react';
import styles from './Icon.module.css';

type IconProps = {
  source: string;
};

const Icon = ({ source }: IconProps) => {
  return <i className={styles.icon} style={{ background: `url(${source})` }}></i>;
};

export default Icon;
