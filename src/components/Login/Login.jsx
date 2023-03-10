import React, { useState } from "react";
import "./Login.css";
import PicturePath from "../../images/logo__COLOR_main-1.svg"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emailPattern } from "../../utils/constants";

export default function Login({ onLoginSubmit, isLoading, isLoggedIn, isError, errorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailError, setEmailError] = useState("");
  const [isPasswordError, setPasswordError] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isLoginMessage, setIsLoginMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn)
    if(isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])

  useEffect(() => {
    if(isError){
      setIsLoginMessage(`Что-то пошло не так`)
    }
    else (setIsLoginMessage(""))
  }, [isError])

  useEffect(() => {
    setIsFormValid(isEmailError && isPasswordError);
  }, [isEmailError, isPasswordError]);

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
    onLoginSubmit({email, password});
  }

  return(
    <>
    <header />
    <main>
    <section className="login">
    <div className="login__wrapper">
      <a className="login__to-main" href="/"><img src={PicturePath} alt="login-logo" className="login__logo"/></a>
      <h4 className="login__title form-title">
        Рады видеть!
      </h4>
      <form className="login__form" onSubmit={handleSubmit}>
        <p className="login__text">E-mail</p>
        <input 
          className="login__input login__email-input"
          type="email" 
          name="email"
          value={email}
          onChange={handleChangeEmail}
          disabled={isLoading}
          required
          pattern={emailPattern}
        />
        <p className={`login__email-error ${!isEmailError ? "login__email-error__visible" : ""}`}>{emailErrorMessage}</p>
        <p className="login__text">Пароль</p>
        <input 
          className={`login__input login__email-input `}
          type="password" 
          name="password"
          value={password}
          onChange={handleChangePassword}
          onInput={handleChangePassword}
          disabled={isLoading}
          required
          />
        <p className={`login__password-error ${!isPasswordError ? "login__password-error__visible" : ""}`}>{passwordErrorMessage}</p>
        <p className="login__error">{isLoginMessage}</p>
        <button className="login__button" disabled={!isFormValid || isLoading}>Войти</button>
      </form>
      <div className="login__links">
        <span className="login__question">Ещё не зарегистрированы?</span>
        <a href="/signup" className="login__signup">Регистрация</a>
      </div>
    </div>
  </section>
    </main>
    <footer />
    
    </>
  )
}
