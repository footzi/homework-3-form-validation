import React, { Fragment } from 'react';
import './Input.css';

const Input = ({ label, type, name, onChange }) => (
  <Fragment>
    <label htmlFor="firstname" className="field__label">
      <span className="field-label">{label}</span>
    </label>
    <input
      className={`field__input field-input t-input-${name}`}
      type={type}
      name={name}
      onChange={onChange}
    />
  </Fragment>
);

export default Input;
