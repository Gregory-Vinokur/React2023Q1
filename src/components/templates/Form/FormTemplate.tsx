import React, { FormHTMLAttributes } from 'react';
import styles from './FormTemplate.module.css';

interface FormTemplateProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
}

const FormTemplate = ({ children, ...rest }: FormTemplateProps) => {
  return (
    <form className={styles.form} {...rest}>
      {children}
    </form>
  );
};

export default FormTemplate;
