import React from 'react';
import styles from './CardTemplate.module.css';

export interface CardTemplateProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardTemplate = ({ children, ...rest }: CardTemplateProps) => {
  return (
    <div className={styles.card} {...rest}>
      {children}
    </div>
  );
};

export default CardTemplate;
