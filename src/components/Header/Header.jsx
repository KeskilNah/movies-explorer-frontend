import "./Header.css"
import React from "react";
import { useLocation } from 'react-router-dom';
import headerLogo from "../../images/logo__COLOR_main-1.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const location = useLocation();

  const backgroundClass = `header${(location.pathname === "/") ? " header__color-blue" : " header__color-grey"}`;

  return(
    <header className={backgroundClass}>
      <div className="header__wrapper">
        <a href="/"><img src={headerLogo} alt="logo" className="header__logo"/></a>
        <Navigation isLoggedIn={props.isLoggedIn} />
      </div>
    </header>
  )
}

export default Header;
