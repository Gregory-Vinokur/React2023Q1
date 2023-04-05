import React from 'react';
import styles from './CardTemplate.module.css';

type CardTemplateProps = {
  children?: React.ReactNode;
};

const CardTemplate = ({ children }: CardTemplateProps) => {
  return <form className={styles.card}>{children}</form>;
};

export default CardTemplate;
