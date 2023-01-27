import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return(
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__links">
          <li className="portfolio__link-wrapper">
          <a href="https://keskilnah.github.io/how-to-learn/" className="portfolio__link portfolio__static" target="_blank" rel="noreferrer">Статичный сайт</a>
          </li>
          <div className="portfolio__line underline_grey"></div>
          <li className="portfolio__link-wrapper">
          <a href="https://keskilnah.github.io/russian-travel/" className="portfolio__link portfolio__adaptiv" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          </li>
          <div className="portfolio__line underline_grey"></div>
          <li className="portfolio__link-wrapper">
          <a href="https://keskilnah.github.io/react-mesto-auth/" className="portfolio__link portfolio__app" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  )
}