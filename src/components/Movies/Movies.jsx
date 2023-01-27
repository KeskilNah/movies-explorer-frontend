import React from "react";
import Footer from "../Footer/Footer";
import HeaderLogined from "../Header/Header_logined";
import "./Movies.css"
import MoviesCardList from "./MoviesCardList/MoviesCardList"
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return(
    <section className="movies">
      <HeaderLogined />
      <div className="movies__wrapper">
        
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </div>
    </section>
  )
}

export default Movies;