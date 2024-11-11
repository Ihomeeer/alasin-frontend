import React from "react";
import './RegisterPage.scss';
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';
import logoPath from '../../images/homePage/Logo.png';

function RegisterPage() {
  return (
    <>
      <form className="registerPage" noValidate>

        <h1 className="registerPage__greetings">Регистрация</h1>
        <fieldset className="registerPage__inputsWrapper">

        <div className="registerPage__inputModule">
            <label className="registerPage__label registerPage__labelTypeName" htmlFor="name">Имя</label>
            <input
              className="registerPage__input"
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              required
              minLength="2"
              maxLength="30"
              placeholder="Имя"
              // onChange={handleChange}
              // value={values.name || ''}
              // disabled={isRegisterInputsDisabled}
            />
            <span className="registerPage__errorSpan">NameError</span>
          </div>

          <div className="registerPage__inputModule">
            <label className="registerPage__label registerPage__labelTypeEmail" htmlFor="email">E-mail</label>
            <input
              // className={`register__input register__input_type_email ${errors.email ? 'register__input_error' : ''}`}
              className="registerPage__input"
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              required
              minLength="2"
              maxLength="30"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="E-mail"
            // onChange={handleChange}
            // value={values.email || ''}
            // disabled={isLoginInputsDisabled}
            />
            <span className="registerPage__errorSpan">EmailError</span>
          </div>

          <div className="registerPage__inputModule">
            <label className="registerPage__label registerPage__labelTypePassword" htmlFor="password">Пароль</label>
            <input
              // className={`register__input register__input_type_password ${errors.password ? 'register__input_error' : ''}`}
              className="registerPage__input"
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              required
              minLength="6"
              maxLength="30"
              placeholder="Пароль"
            // onChange={handleChange}
            // value={values.password || ''}
            // disabled={isLoginInputsDisabled}
            />
            <span className="registerPage__errorSpan">PasswordError</span>
          </div>

        </fieldset>
        <button type="submit" className="registerPage__submitButton" disabled={true}>Отправить</button>
        <div className="registerPage__signinWrapper">
          <p className="registerPage__text">Уже зарегистрированы?</p>
          <Link className="registerPage__link" to="/login">Войти</Link>
        </div>
      </form>
      <Logo
        logoPath={logoPath}
      >
      </Logo>
    </>

  );
}


export default RegisterPage;