import React from "react";
import "./Promo.css";
import PicturePath from "../../../images/WEB-logo.svg"

export default function Promo() {
  return(
    <div className="promo">
      <div className="promo__wrapper">
        <div className="promo__main">
          <div className="promo__text">
            <h1 className="promo__title">Учебный проект студента факультета<br/>Веб-разработки.</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <img src={PicturePath} alt="" className="promo__img"/>
        </div>
        <div className="promo__more">
          <a href="/" className="promo__nav">Узнать больше</a>
        </div>
        
      </div>
    </div>
  )
}