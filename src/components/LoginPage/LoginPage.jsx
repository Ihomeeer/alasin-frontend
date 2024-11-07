import React from "react";
import './LoginPage.css';
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';
import logoPath from '../../images/homePage/Logo.png';

function LoginPage() {
  return (
    <>
      <form className="loginPage" noValidate>

        <h1 className="loginPage__greetings">Рады видеть!</h1>
        <fieldset className="loginPage__inputsWrapper">



          <div className="loginPage__inputModule">
            <label className="loginPage__label loginPage__labelTypeEmail" htmlFor="email">E-mail</label>
            <input
              // className={`register__input register__input_type_email ${errors.email ? 'register__input_error' : ''}`}
              className="loginPage__input"
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
            <span className="loginPage__errorSpan">EmailError</span>
          </div>

          <div className="loginPage__inputModule">
            <label className="loginPage__label loginPage__labelTypePassword" htmlFor="password">Пароль</label>
            <input
              // className={`register__input register__input_type_password ${errors.password ? 'register__input_error' : ''}`}
              className="loginPage__input"
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
            <span className="loginPage__errorSpan">PasswordError</span>
          </div>

        </fieldset>
        <button type="submit" className="loginPage__submitButton" disabled={true}>Войти</button>
        <div className="loginPage__signinWrapper">
          <p className="loginPage__text">Еще не зарегистрированы?</p>
          <Link className="loginPage__link" to="/register">Регистрация</Link>
        </div>
      </form>
      <Logo
        logoPath={logoPath}
      >
      </Logo>
    </>

  );
}


export default LoginPage;