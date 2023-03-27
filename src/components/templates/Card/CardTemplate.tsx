import React, { Component } from 'react';
import styles from './CardTemplate.module.css';

type CardTemplateProps = {
  children?: React.ReactNode;
};

class CardTemplate extends Component<CardTemplateProps> {
  render() {
    return <form className={styles.card}>{this.props.children}</form>;
  }
}

export default CardTemplate;
