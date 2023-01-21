import React from "react";
import "./Login.css";
import PicturePath from "../../images/logo__COLOR_main-1.svg"

export default function Login() {
  return(
  <div className="login">
    <div className="login__wrapper">
      <a className="login__to-main" href="/"><img src={PicturePath} alt="asd" className="login__logo"/></a>
      <h4 className="login__title form-title">
        Рады видеть!
      </h4>
      <form className="login__form">
        <p className="login__text">E-mail</p>
        <input className="login__input login__email-input" type="text" />
        <div className="login__line underline_grey"></div>
        <p className="login__email-error">Что-то пошло не так...</p>
        <p className="login__text">Пароль</p>
        <input className="login__input login__email-input" type="password" />
        <div className="login__line underline_grey"></div>
        <p className="login__password-error">Что-то пошло не так...</p>
        <button className="login__button">Войти</button>
      </form>
      <div className="login__links">
        <span className="login__question">Ещё не зарегистрированы?</span>
        <a href="/signup" className="login__signup">Регистрация</a>
      </div>
    </div>
  </div>
  )
}
