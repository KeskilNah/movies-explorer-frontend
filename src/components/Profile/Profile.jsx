import React from "react";
import HeaderLogined from "../Header/Header_logined";
import "./Profile.css"

export default function Profile() {
  return(
    <section className="profile">
      <HeaderLogined />
      <div className="profile__wrapper">
        <h4 className="profile__title form-title">
          Привет, Виталий!
        </h4>
        <div className="profile__place">
          <p className="profile__text">Имя</p>
          <p className="profile__name">Виталий</p>
        </div>
        <div className="underline_grey"></div>
        <div className="profile__place">
          <p className="profile__text">E-mail</p>
          <p className="profile__email">pochta@yandex.ru</p>
        </div>
        <a href="/" className="profile__edit">Редактировать</a>
        <a href="/" className="profile__signout">Выйти из аккаунта</a>
      </div>
    </section>
  )
}

