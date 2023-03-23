import React, { Component } from 'react';
import styles from './FormTemplate.module.css';

type FormTemplateProps = {
  children?: React.ReactNode;
};

class FormTemplate extends Component<FormTemplateProps> {
  render() {
    return <form className={styles.form}>{this.props.children}</form>;
  }
}

export default FormTemplate;
