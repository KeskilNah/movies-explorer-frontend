import React from "react";
import "./Register.css";
import PicturePath from "../../images/logo__COLOR_main-1.svg"

export default function Register() {
  return(
  <section className="register">
    <div className="register__wrapper">
    <a className="register__to-main" href="/"><img src={PicturePath} alt="logo" className="register__logo"/></a>
      <h4 className="register__title form-title">
        Добро пожаловать!
      </h4>
      <form className="register__form">
        <p className="register__text">Имя</p>
        <input className="register__input register__name-input" type="text" defaultValue="Виталий"/>
        <p className="register__name-error">Что-то пошло не так...</p>
        <p className="register__text">E-mail</p>
        <input className="register__input register__email-input" type="text" />
        <p className="register__email-error">Что-то пошло не так...</p>
        <p className="register__text">Пароль</p>
        <input className="register__input register__email-input" type="password" />
        <p className="register__password-error">Что-то пошло не так...</p>
        <button className="register__button">Зарегистрироваться</button>
      </form>
      <div className="register__links">
        <span className="register__question">Уже зарегистрированы?</span>
        <a href="/signin" className="register__signin">Войти</a>
      </div>

    </div>
  </section>
  ) 
    
}