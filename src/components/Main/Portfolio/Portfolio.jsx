import React from "react";
import "./Portfolio.css";
import icoArrow from "../../../images/arrow.svg"

export default function Portfolio() {
  return(
    <div className="portfolio">
      <div className="portfolio__wrapper">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__links">
          <li className="portfolio__link-wrapper">
            <a href="/" className="portfolio__link portfolio__static">Статичный сайт</a>
            <img className="portfolio__image" src={icoArrow} alt="Статичный сайт" />
          </li>
          <div className="portfolio__line underline_grey"></div>
          <li className="portfolio__link-wrapper">
            <a href="/" className="portfolio__link portfolio__adaptiv">Адаптивный сайт</a>
            <img className="portfolio__image" src={icoArrow} alt="Адаптивный сайт" />
          </li>
          <div className="portfolio__line underline_grey"></div>
          <li className="portfolio__link-wrapper">
            <a href="/" className="portfolio__link portfolio__app">Одностраничное приложение</a>
            <img className="portfolio__image" src={icoArrow} alt="Одностраничное приложение" />
          </li>
        </ul>
      </div>
    </div>
  )
}