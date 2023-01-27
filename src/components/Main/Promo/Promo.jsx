import React from "react";
import "./Promo.css";
import PicturePath from "../../../images/WEB-logo.svg"

export default function Promo() {
  return(
    <section className="promo">
      <div className="promo__wrapper">
        <div className="promo__main">
          <div className="promo__text">
            <h1 className="promo__title">Учебный проект студента факультета<br/>Веб-разработки.</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <img src={PicturePath} alt="Промо" className="promo__img"/>
        </div>
          <a href="/" className="promo__nav">Узнать больше</a>
      </div>
    </section>
  )
}