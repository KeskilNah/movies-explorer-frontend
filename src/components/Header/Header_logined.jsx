import "./Header_logined.css"
import React from "react";
import headerLogo from "../../images/logo__COLOR_main-1.svg";
import Navigation from "../Navigation/Navigation";


function HeaderLogined() {
  return(
    <header className="header_logined">
      <div className="header__wrapper_logined">
      <a href="/"><img src={headerLogo} alt="header-logo" className="header__logo_loggined"/></a>
        <Navigation />
      </div>
    </header>
  )
}

export default HeaderLogined;
