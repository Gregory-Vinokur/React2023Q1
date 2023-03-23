import React, { Component } from 'react';
import styles from './Select.module.css';

type SelectProps = {
  options: SelectOption[];
};

type SelectOption = {
  value: string | number;
  label: string;
};

class Select extends Component<SelectProps> {
  render() {
    const { options } = this.props;
    return (
      <select className={styles.select}>
        {options.map(({ value, label }) => {
          return <option key={value}>{label}</option>;
        })}
      </select>
    );
  }
}

export default Select;
