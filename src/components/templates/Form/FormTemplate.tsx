import React, { FormHTMLAttributes } from 'react';
import styles from './FormTemplate.module.css';

interface FormTemplateProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
  formRef?: React.RefObject<HTMLFormElement>;
}

const FormTemplate = ({ formRef, children, ...rest }: FormTemplateProps) => {
  return (
    <form className={styles.form} ref={formRef} {...rest}>
      {children}
    </form>
  );
};

export default FormTemplate;
