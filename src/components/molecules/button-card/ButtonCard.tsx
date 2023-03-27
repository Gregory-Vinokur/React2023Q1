import Button from '../../atoms/button/Button';
import React, { Component } from 'react';
import styles from './ButtonCard.module.css';
import Icon from './../../atoms/icon/Icon';
import Span from './../../atoms/typography/Span';

type ButtonCardProps = {
  source: string;
  counter: number | string;
};

class ButtonCard extends Component<ButtonCardProps> {
  render() {
    const { source, counter } = this.props;
    return (
      <Button className={styles.cardButton}>
        <Icon source={source} />
        <Span className={styles.cardButtonCounter}>{counter}</Span>
      </Button>
    );
  }
}

export default ButtonCard;
