import React, { Component, InputHTMLAttributes } from 'react';
import Label from './../../atoms/label/Label';
import Span from './../../atoms/typography/Span';
import styles from './Switcher.module.css';

interface SwitcherProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  options: Array<string>;
  className?: string;
  error?: string;
  inputRefs?: React.RefObject<HTMLInputElement>[];
}

class Switcher extends Component<SwitcherProps> {
  render() {
    const { text, options, inputRefs, error } = this.props;
    return (
      <Label>
        {text && <Span>{text}</Span>}
        {options.map((option, index) => (
          <React.Fragment key={option}>
            <input
              className={styles.radio}
              type="radio"
              value={option}
              name={text}
              id={option}
              ref={inputRefs && inputRefs[index]}
            />
            <label htmlFor={option}>{option}</label>
          </React.Fragment>
        ))}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </Label>
    );
  }
}

export default Switcher;
