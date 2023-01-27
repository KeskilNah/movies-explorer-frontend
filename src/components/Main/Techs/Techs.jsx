import React from "react";
import "./Techs.css";

export default function Techs() {
  return(
    <section className="techs">
      <div className="techs__wrapper">
      <h2 className="techs__title section-title">Технологии</h2>
      <div className="techs__line underline_white"></div>
      <div className="techs__content">
        <h3 className="techs__content-title">7 технологий</h3>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__buttons">
          <li className="techs__button">HTML</li>
          <li className="techs__button">CSS</li>
          <li className="techs__button">JS</li>
          <li className="techs__button">REACT</li>
          <li className="techs__button">Git</li>
          <li className="techs__button">Express.js</li>
          <li className="techs__button">mongoDB</li>
        </ul>
      </div>
      </div>
    </section>
  )
}