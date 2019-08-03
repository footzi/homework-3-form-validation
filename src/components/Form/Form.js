import React, { Component } from 'react';
import './Form.css';
import Bond from './assets/bond_approve.jpg';

const validationMessage = {
  firstname: {
    empty: 'Нужно указать имя',
    error: 'Имя указано не верно'
  },
  lastname: {
    empty: 'Нужно указать фамилию',
    error: 'Фамилия указана не верно'
  },
  password: {
    empty: 'Нужно указать пароль',
    error: 'Пароль указан не верно'
  }
};

const defaultUser = {
  firstname: 'james',
  lastname: 'bond',
  password: '007'
};

export default class Form extends Component {
  state = {
    fields: {
      firstname: { value: '', error: '' },
      lastname: { value: '', error: '' },
      password: { value: '', error: '' }
    },
    isValid: false
  };

  changeHandler = e => {
    e.persist();
    const { name, value } = e.target;
    const { fields } = this.state;

    this.setState(prevState => ({
      fields: {
        ...prevState.fields,
        [name]: { value, error: prevState.fields[name].error }
      }
    }));

    for (let field in fields) {
      this.setError(field, '');
    }
  };

  setError(field, error) {
    this.setState(prevState => ({
      fields: {
        ...prevState.fields,
        [field]: {
          value: prevState.fields[field].value,
          error
        }
      }
    }));
  }

  submitHandler = e => {
    const { isValid } = this.state;
    e.preventDefault();
    this.setValidation();

    if (!isValid) {
      return;
    }
  };

  setValidation() {
    const { fields } = this.state;

    for (let field in fields) {
      if (fields[field].value === '') {
        this.setError(field, validationMessage[field].empty);
        this.setIsValid(false);

      } else if (
        fields[field].value !== '' &&
        fields[field].value !== defaultUser[field]
      ) {
        this.setError(field, validationMessage[field].error);
        this.setIsValid(false);
        
      } else {
        this.setIsValid(true);
      }
    }
  }

  setIsValid(isValid) {
    this.setState({
      isValid
    });
  }

  render() {
    const { firstname, lastname, password } = this.state.fields;
    const { isValid } = this.state;

    return (
      <div className="app-container">
        {isValid ? (
          <img src={Bond} className="t-bond-image" alt="bond approve" />
        ) : (
          <form className="form" onSubmit={this.submitHandler}>
            <h1>Введите свои данные, агент</h1>
            <p className="filed">
              <label htmlFor="firstname" className="field__label">
                <span className="field-label">Имя</span>
              </label>
              <input
                className="field__input field-input t-input-firstname"
                type="text"
                name="firstname"
                onChange={this.changeHandler}
              />
              <span className="field__error field-error t-error-firstname">
                {firstname.error}
              </span>
            </p>
            <p className="filed">
              <label htmlFor="lastname" className="field__label">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                className="field__input field-input t-input-lastname"
                type="text"
                name="lastname"
                onChange={this.changeHandler}
              />
              <span className="field__error field-error t-error-lastname">
                {lastname.error}
              </span>
            </p>
            <p className="filed">
              <label htmlFor="password" className="field__label">
                <span className="field-label">Пароль</span>
              </label>
              <input
                className="field__input field-input t-input-password"
                type="password"
                name="password"
                onChange={this.changeHandler}
              />
              <span className="field__error field-error t-error-password">
                {password.error}
              </span>
            </p>
            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
              />
            </div>
          </form>
        )}
      </div>
    );
  }
}
