import React from "react";
import "./SearchForm.css"
import searchIco from "../.././../images/icons/icon-search.svg"


function SearchForm() {
  return(
        <div className="search">
          <div className="search__wrapper">
            <form action="" className="search__form">
              <img className="search__ico" src={searchIco} alt="search-icon" />
              <input placeholder="Фильм" type="text" className="search__text-input"/>
              <button type="submit" className="search__submit"></button>
              <div className="search__line"></div>
              <input type="checkbox" className="search__trigger" id="trigger1"/>
              <label className="search__short" for="trigger1">Короткометражки</label>
            </form>
          </div>
        <div className="underline_grey"></div>
      </div>
  )
}

export default SearchForm;