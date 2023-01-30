import React from "react";
import "./SearchForm.css"
import searchIco from "../.././../images/icons/icon-search.svg"


function SearchForm() {
  return(
        <section className="search">
            <form action="" className="search__form">
              <div className="search__wrapper">
                <img className="search__ico" src={searchIco} alt="search-icon" />
                <input placeholder="Фильм" type="text" className="search__text-input" required/>
                <button type="submit" className="search__submit"></button>
                <div className="search__line"></div>
              </div>
              <div className="trigger">
                  <input type="checkbox" className="trigger__checkbox" id="trigger1"/>
                  <label className="trigger__text" htmlFor="trigger1">Короткометражки</label>
              </div>
            </form>
          
        <div className="underline underline_grey"></div>
      </section>
  )
}

export default SearchForm;