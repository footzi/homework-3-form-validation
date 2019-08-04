import React from 'react';
import Input from '../Input';
import './Field.css';

const Field = ({ label, name, type, onChange, error }) => (
  <p className="field">
    <Input
      label={label}
      name={name}
      type={type}
      onChange={onChange}
    />
    <span className={`field__error field-error t-error-${name}`}>{error}</span>
  </p>
);

export default Field;
