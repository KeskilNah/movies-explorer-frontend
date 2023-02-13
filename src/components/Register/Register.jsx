import React, { useState } from "react";
import "./Register.css";
import PicturePath from "../../images/logo__COLOR_main-1.svg"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emailPattern } from "../../utils/constants";

export default function Register({ onRegisterSubmit, isLoading, isLoggedIn, isError }) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNameError, setNameError] = useState("")
  const [isEmailError, setEmailError] = useState("");
  const [isPasswordError, setPasswordError] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isRegisteredMessage, setIsRegisteredMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])

  useEffect(() => {
    if(isError){
      setIsRegisteredMessage(`Что-то пошло не так`)
    }
    else (setIsRegisteredMessage(""))
  }, [isError])

  useEffect(() => {
    setIsFormValid(isEmailError && isPasswordError && isNameError);
  }, [isEmailError, isPasswordError, isNameError]);


  const handleChangeName = (e) => {
    setName(e.target.value);
    setNameError(e.target.validity.valid);
    setNameErrorMessage(e.target.validity.valid ? "" : e.target.validationMessage)
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(e.target.validity.valid);
    setEmailErrorMessage(e.target.validity.valid ? "" : e.target.validationMessage)
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(e.target.validity.valid)
    setPasswordErrorMessage(e.target.validity.valid ? "" : e.target.validationMessage)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterSubmit({ name, email, password});
  }

  return(
    <>
      <header />
      <main>
      <section className="register">
    <div className="register__wrapper">
    <a className="register__to-main" href="/"><img src={PicturePath} alt="logo" className="register__logo"/></a>
      <h4 className="register__title form-title">
        Добро пожаловать!
      </h4>
      <form className="register__form" onSubmit={handleSubmit}>
        <p className="register__text">Имя</p>
        <input 
          className="register__input register__name-input"
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          disabled={isLoading}
          required
        />
        <p className={`register__name-error ${!isNameError ? "register__name-error_visible" : ""} `}>{nameErrorMessage}</p>
        <p className="register__text">E-mail</p>
        <input 
          className="register__input register__email-input"
          type="email" 
          name="email"
          value={email}
          onChange={handleChangeEmail}
          disabled={isLoading}
          required
          pattern={emailPattern}
          />
        <p className={`register__email-error ${!isEmailError ? "register__email-error_visible" : ""} `}>{emailErrorMessage}</p>
        <p className="register__text">Пароль</p>
        <input
          className="register__input register__email-input"
          type="password" 
          name="password"
          value={password}
          onChange={handleChangePassword}
          disabled={isLoading}
          required
        />
        <p className={`register__password-error ${!isPasswordError ? "register__password-error_visible" : ""} `}>{passwordErrorMessage}</p>
        <p className="register__error">{isRegisteredMessage}</p>
        <button className="register__button" disabled={!isFormValid || isLoading}>Зарегистрироваться</button>
      </form>
      <div className="register__links">
        <span className="register__question">Уже зарегистрированы?</span>
        <a href="/signin" className="register__signin">Войти</a>
      </div>

    </div>
  </section>
      </main>
      <footer />
    </>
  
  ) 
    
}