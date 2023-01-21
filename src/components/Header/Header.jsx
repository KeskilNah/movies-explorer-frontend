import "./Header.css"
import React from "react";
import headerLogo from "../../images/logo__COLOR_main-1.svg";

function Header() {
  return(
    <header className="header">
      <div className="header__wrapper">
        <a href="#AboutProject"><img src={headerLogo} alt="asd" className="header__logo"/></a>
        <nav className="header__nav">
          <a href="/signup" className="header__singup">Регистрация</a>
          <a href="/signin" className="header__singin">Войти</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;
