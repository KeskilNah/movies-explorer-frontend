import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { emailPattern } from "../../utils/constants";
import Header from "../Header/Header";
import "./Profile.css"

export default function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [inputsDisabled, setInputDisabled] = useState(true);
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [isFormValid, setIsFormValid] = useState(false);
  const [profileSavedMessage, setProfileSavedMessage] = useState("")
  const [isEmailError, setEmailError] = useState(false);
  const [isNameError, setIsNameError] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [isValuesChanged, setIsValueChanged] = useState(false)

  useEffect(() => {
    setIsFormValid((!isEmailError && !isNameError));
  }, [isEmailError, isNameError, newName, newEmail]);

  useEffect(() => {
    setNewEmail(currentUser.email)
    setNewName(currentUser.name)
  }, [currentUser.name, currentUser.email])

  useEffect(() => {
    if(currentUser.name !== newName || currentUser.email !== newEmail) {
      setIsValueChanged(true)
    } else (setIsValueChanged(false))
  }, [newName, newEmail, currentUser.name, currentUser.email])

  const buttonEditClass = inputsDisabled ? `profile__button_hidden` : ``;
  const buttonSaveClass = inputsDisabled ? `` : `profile__button_hidden`;
  const underlineClass = inputsDisabled ? `` : `profile__underline`;

  const handleEditButton = () => {
    setInputDisabled(false);
    setProfileSavedMessage("")
  }

  const handleSaveButton = () => {
    setInputDisabled(true);
    props.onProfileEdit({name: newName, email: newEmail})
    if(props.isError){
      setProfileSavedMessage("Что-то пошло не так")
    } else (setProfileSavedMessage("Данные сохранены!"))
  }

  const handleChangeEmail = (e) => {
    setNewEmail(e.target.value)
    setEmailError(!e.target.validity.valid);
  }
  const handleChangeName = (e) => {
    setNewName(e.target.value)
    setIsNameError(!e.target.validity.valid);
  }
  


  useEffect(() => {
    setIsButtonDisabled(!(isValuesChanged && isFormValid))
  }, [isValuesChanged, isFormValid, newName, newEmail, currentUser.name, currentUser.email])
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
              type="email"
              className="profile__email profile__input"
              defaultValue={newEmail}
              disabled={inputsDisabled || props.isLoading}
              required
              onChange={handleChangeEmail}
              pattern={emailPattern}
            />
          </div>
          <div className={`underline underline_grey ${underlineClass}`}></div>
          <p className="profile__message">{profileSavedMessage}</p>
          <button
          type="button"
          className={`profile__edit profile__button
          ${buttonSaveClass}`}
          onClick={handleEditButton}>Редактировать</button>
          <button
            type="button"
            className={`profile__edit profile__button ${buttonEditClass}`}
            onClick={handleSaveButton}
            disabled={isButtonDisabled}
          >
            Сохранить
            </button>
          <button type="button" className="profile__signout" onClick={props.onLogout}>Выйти из аккаунта</button>
        </div>
        </section>
      </main>
      <footer />
    </>
    
  )
}

