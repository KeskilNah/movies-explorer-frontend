import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import "./Profile.css"

export default function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [inputsDisabled, setInputDisabled] = useState(true);
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [profileSavedMessage, setProfileSavedMessage] = useState("")

  useEffect(() => {
    setNewEmail(currentUser.email)
    setNewName(currentUser.name)
  }, [currentUser.name, currentUser.email])

  const buttonEditClass = inputsDisabled ? `profile__button_hidden` : ``;
  const buttonSaveClass = inputsDisabled ? `` : `profile__button_hidden`;
  const underlineClass = inputsDisabled ? `` : `profile__underline`;

  const handleEditButton = () => {
    setInputDisabled(false);
  }

  const handleSaveButton = () => {
    setInputDisabled(true);
    props.onProfileEdit({name: newName, email: newEmail})
    setProfileSavedMessage("Данные сохранены!")
  }

  const handleChangeEmail = (e) => {
    setIsValueChanged(true)
    setNewEmail(e.target.value)
  }
  const handleChangeName = (e) => {
    setIsValueChanged(true)
    setNewName(e.target.value)
  }

  const [isValuesChanged, setIsValueChanged] = useState(false)


  return(

    <>
      <Header isLoggedIn={props.isLoggedIn}/>
      <main>
        <section className="profile">
        
        <div className="profile__wrapper">
          <h4 className="profile__title form-title">
            Привет, {currentUser.name}!
          </h4>
          <div className="profile__place">
            <p className="profile__text">Имя</p>
            <input 
              type="text"
              className="profile__name profile__input"
              value={newName}
              disabled={inputsDisabled || props.isLoading}
              required
              onChange={handleChangeName}
            />
          </div>
          <div className={`underline underline_grey ${underlineClass}`}></div>
          <div className="profile__place">
            <p className="profile__text">E-mail</p>
            <input
              type="text"
              className="profile__email profile__input"
              defaultValue={newEmail}
              disabled={inputsDisabled || props.isLoading}
              required
              onChange={handleChangeEmail}
            />
          </div>
          <div className={`underline underline_grey ${underlineClass}`}></div>
          <p className="profile__message">{profileSavedMessage}</p>
          <button type="button" className={`profile__edit profile__button ${buttonSaveClass}`} onClick={handleEditButton}>Редактировать</button>
          <button type="button" className={`profile__edit profile__button ${buttonEditClass}`} onClick={handleSaveButton} disabled={!isValuesChanged || props.isLoading}>Сохранить</button>
          <button type="button" className="profile__signout" onClick={props.onLogout}>Выйти из аккаунта</button>
        </div>
        </section>
      </main>
      <footer />
    </>
    
  )
}

