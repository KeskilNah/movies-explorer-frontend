import "./Navigation.css"
import React from "react"
import { useLocation } from 'react-router-dom';

function handleBurgerClick() {
  document.querySelector(".navigation__wrapper").classList.add("navigation__wrapper_opened")
  document.querySelector(".navigation__close-button").classList.add("navigation__close-button_visible")
}

function handleCloseButton () {
  document.querySelector(".navigation__wrapper").classList.remove("navigation__wrapper_opened")
  document.querySelector(".navigation__close-button").classList.remove("navigation__close-button_visible")
}



export default function Navigation() {
  const location = useLocation();
  return(
    <nav className="navigation_logined">
      <div className="navigation__wrapper">
        <a href="/" className={(location.pathname === "/") ? "udnerline navigation__main": "navigation__main"}>Главная</a>
        <a href="/movies" className={(location.pathname === "/movies") ? "navigation__movies udnerline": "navigation__movies"}>Фильмы</a>
        <a href="/saved-movies" className={(location.pathname === "/saved-movies") ? "navigation__saved-movies udnerline": "navigation__saved-movies"}>Сохранённые фильмы</a>
        <a href="/profile" className={(location.pathname === "/profile") ? "navigation__profile udnerline": "navigation__profile"}>Аккаунт<div className="navigation__profile-pic">
        </div></a>
        <button className="navigation__close-button" onClick={handleCloseButton}></button>
        
        <div className="navigation__background"></div>
      </div>
      <div className="navigation__burger" onClick={handleBurgerClick}>
      <div className="navigation__burger-line"></div>
        </div>

    </nav>
  )
}