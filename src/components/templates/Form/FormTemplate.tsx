import React, { Component, FormHTMLAttributes } from 'react';
import styles from './FormTemplate.module.css';

interface FormTemplateProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
  formRef?: React.RefObject<HTMLFormElement>;
}

class FormTemplate extends Component<FormTemplateProps> {
  reset = () => {
    if (this.props.formRef?.current) {
      this.props.formRef.current.reset();
    }
  };
  render() {
    const { formRef, children, ...rest } = this.props;
    return (
      <form className={styles.form} ref={formRef} {...rest}>
        {children}
      </form>
    );
  }
}

export default FormTemplate;
