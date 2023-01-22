import React from "react";
import "./AboutMe.css";
import avatar from "../../../images/avatar.png"

export default function AboutMe() {
  return(
    <div className="about-me">
      <div className="about-me__wrapper">
        <h2 className="about-me__title section-title">Студент</h2>
        <div className="about-me__line underline_white"></div>
        <div className="about-me__profile">
          <div className="about-me__avatar-container"><img className="about-me__avatar" src={avatar} alt="avatar" /></div>
          <div className="about-me__info">
            <h2 className="about-me__name">Виталий</h2>
            <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__summary">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href="/" className="about-me__link">Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}