import React, { Component, FormHTMLAttributes } from 'react';
import styles from './FormTemplate.module.css';

interface FormTemplateProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
  formRef?: React.RefObject<HTMLFormElement>;
}

class FormTemplate extends Component<FormTemplateProps> {
  formRef = React.createRef<HTMLFormElement>();

  reset = () => {
    if (this.formRef.current) {
      this.formRef.current.reset();
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
