import React from "react";
import Footer from "../Footer/Footer";
import HeaderLogined from "../Header/Header_logined";
import "./Movies.css"
import MoviesCardList from "./MoviesCardList/MoviesCardList"
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return(
    <div className="movies">
      <HeaderLogined />
      <div className="movies__wrapper">
        
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </div>
    </div>
  )
}

export default Movies;