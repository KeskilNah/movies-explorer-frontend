/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./AboutProject.css";

export default function Promo() {
  return(
    <section className="about">
      <a name="AboutProject"></a>
      <div className="about__wrapper">
        <h2 className="about__title section-title">О проекте</h2>
        <div className="about__line underline_white"></div>
        <div className="about__columns">
          <div className="about__column first-column">
            <h3 className="about__column-title">Дипломный проект включал 5 этапов</h3>
            <p className="about__column-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about__column second-column">
            <h3 className="about__column-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about__column-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about__progress">
          <div className="about__backend-progress-bar">
            <p className="about__backend-time">1 неделя</p>
            <p className="about__backend-text">Back-end</p>
          </div>
          <div className="about__frontend-progress-bar">
            <p className="about__frontend-time">4 недели</p>
            <p className="about__frontend-text">Frond-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}