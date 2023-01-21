import React from "react";
import "./Footer.css"

function Footer() {
  return(
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__title underline_grey"></div>
        <div className="footer__author">
          <span className="footer__year">© {`${new Date().getFullYear()}`}</span>
          <div className="footer__links">
            <a href="/" className="footer__yandex">Яндекс.Практикум</a>
            <a href="/" className="footer__github">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
