import Button from '../../atoms/button/Button';
import React from 'react';
import styles from './ButtonCard.module.css';
import Icon from './../../atoms/icon/Icon';
import Span from './../../atoms/typography/Span';

type ButtonCardProps = {
  source: string;
  counter: number | string;
};

const ButtonCard = ({ source, counter }: ButtonCardProps) => {
  return (
    <Button className={styles.cardButton}>
      <Icon source={source} />
      <Span className={styles.cardButtonCounter}>{counter}</Span>
    </Button>
  );
};

export default ButtonCard;
