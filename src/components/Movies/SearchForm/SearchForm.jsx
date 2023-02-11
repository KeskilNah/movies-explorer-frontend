import React from "react";
import "./SearchForm.css"
import searchIco from "../.././../images/icons/icon-search.svg"
import { useState } from "react";
import { useEffect } from "react";


function SearchForm({
  searchSubmit,
  isShortsOn,
  setIsShortOn,
  searchValue,
  setSearchValue,
  inputError,
  setInputError,
  }) {

    useEffect(() => {
      document.querySelector(".trigger")
    }, [isShortsOn])

  const [validationMessage, setValidationMessage] = useState("");
  const handleSearchValue = (evt) => {
    setSearchValue(evt.target.value)
    const validationText = ((evt.target.validity.valid ? "Фильм" : `${evt.target.validationMessage}`))
    setValidationMessage(validationText)
  }
  const handleTriggerClick = () => {
    setIsShortOn(!isShortsOn);
    (localStorage.setItem("short_films", JSON.stringify(isShortsOn)))
  }
  
  return(
        <section className="search">
            <form action="" className="search__form" onSubmit={searchSubmit} noValidate>
              <div className="search__wrapper">
                <img className="search__ico" src={searchIco} alt="search-icon" />
                <input 
                  placeholder={validationMessage}
                  type="text"
                  className="search__text-input"
                  required
                  value={searchValue}
                  onChange={handleSearchValue}
                  onClick={() => setInputError("")}
                />
                <button type="submit" className="search__submit"></button>
                <div className="search__line"></div>
              </div>
              <div className="trigger">
                  <input
                  type="checkbox"
                  className="trigger__checkbox"
                  id="trigger1"
                  onChange={handleTriggerClick}
                  defaultChecked={!JSON.parse(localStorage.getItem("short_films"))}
                  />
                  <label className="trigger__text" htmlFor="trigger1">Короткометражки</label>
              </div>
            </form>
            <span className="search__error">{inputError}</span>
        <div className="underline underline_grey"></div>
      </section>
  )
}

export default SearchForm;