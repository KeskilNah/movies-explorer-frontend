import React, { useState} from "react";
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  movies,
  renderMovie,
  isLoading,
  savedMovies,
  addMovie,
  deleteMovie,
  setRenderMovie,
}) {
  const [emptyTextVisible, setEmptyTextVisible] = useState(false);
  const [moreButtonVisible, setMoreButtonVisible] = useState(true);
  const [maxCards, setMaxCards] = useState(12);
  
  const { pathname } = useLocation();

  useEffect(() => {
    if (localStorage.getItem("foundFilms")) {
      setRenderMovie(
        JSON.parse(localStorage.getItem("foundFilms"))
      );
    }
  }, [movies, setRenderMovie, pathname])

  const resiseHandles = () => {
    if(window.innerWidth >= 1280) {
      setMaxCards(12);
    } else if (window.innerWidth <= 1280 && window.innerWidth > 1200) {
      setMaxCards(9);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 776) {
      setMaxCards(8);
    } else if (window.innerWidth <= 775) {
      setMaxCards(5);
    }
  }
  window.addEventListener("resize", resiseHandles);
  const handleMoreClick = () => {
    if(window.innerWidth >= 1280) {
      setMaxCards(maxCards + 4);
    } else if (window.innerWidth <= 1280 && window.innerWidth > 1200) {
      setMaxCards(maxCards + 3);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 776) {
      setMaxCards(maxCards + 2);
    } else if (window.innerWidth <= 775) {
      setMaxCards(maxCards + 1);
    }
  }
  
  useEffect(() => {
    const cardsCount = (pathname === "/movies") ? renderMovie.length : savedMovies.length;
    console.log(renderMovie.length)
    console.log(savedMovies.length)
    console.log(maxCards)
    if(cardsCount <= maxCards) {
      setMoreButtonVisible (true)
    } else {setMoreButtonVisible (false)}
  }, [maxCards, pathname, renderMovie, savedMovies])

  useEffect(() => {
    if(savedMovies.length === 0) {
      setEmptyTextVisible (true)
    } else {setEmptyTextVisible (false)}
  }, [savedMovies.length])

  return(
    <section className="movies__card-list">
          <ul className="movies__cards">
            {pathname === "/movies" ?
            renderMovie.map((data) => (
              <MoviesCard 
              item={data}
              key={data.id ? data.id : data._id}
              name={data.nameRU}
              image={data.image.url}
              duration={data.duration}
              trailerLink={data.trailerLink}
              maxCards={maxCards}
              addMovie={addMovie}
              savedMovies={savedMovies}
              deleteMovie={deleteMovie}
              />
            )) :
            savedMovies.map((data) => (
              <MoviesCard 
              item={data}
              key={data.id ? data.id : data._id}
              name={data.nameRU}
              image={data.image.url}
              duration={data.duration}
              trailerLink={data.trailerLink}
              maxCards={maxCards}
              addMovie={addMovie}
              savedMovies={savedMovies}
              deleteMovie={deleteMovie}
              />
            ))
            }
            {}
          </ul>
          {isLoading ? <Preloader /> : ''}
          {emptyTextVisible ? <p className="movies__empty">Ничего не найдено</p> : ''}
        <div className="movies__more">
          {!moreButtonVisible ? <button className="movies__more-button" onClick={handleMoreClick}>Ещё</button> : ''}
        </div>
    </section>
  )
}

export default MoviesCardList;