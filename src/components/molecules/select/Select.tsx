import React, { Component } from 'react';
import styles from './Select.module.css';

type SelectProps = {
  options: SelectOption[];
  selectRef?: React.RefObject<HTMLSelectElement>;
};

type SelectOption = {
  value: string | number;
  label: string;
};

class Select extends Component<SelectProps> {
  render() {
    const { options, selectRef } = this.props;
    return (
      <select className={styles.select} ref={selectRef}>
        <option value="">Select the theme:</option>
        {options.map(({ value, label }) => {
          return <option key={value}>{label}</option>;
        })}
      </select>
    );
  }
}

export default Select;
