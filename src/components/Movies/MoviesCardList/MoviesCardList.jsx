import React, { useState} from "react";
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resolutions, maxCardNumber } from "../../../utils/constants";

function MoviesCardList({
  movies,
  renderMovie,
  isLoading,
  savedMovies,
  addMovie,
  deleteMovie,
  setRenderMovie,
  emptyText,
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
    if(window.innerWidth >= resolutions.laptopL) {
      setMaxCards(maxCardNumber.laptopLMaxCards);
      window.removeEventListener("resize", resiseHandles);
    } else if (window.innerWidth <= resolutions.laptopL && window.innerWidth > resolutions.laptop) {
      setMaxCards(maxCardNumber.laptopMaxCards);
      window.removeEventListener("resize", resiseHandles);
    } else if (window.innerWidth <= resolutions.laptop && window.innerWidth > resolutions.tablet) {
      setMaxCards(maxCardNumber.tabletMaxCards);
      window.removeEventListener("resize", resiseHandles);
    } else if (window.innerWidth <= (resolutions.tablet - 1)) {
      setMaxCards(maxCardNumber.mobileDeviceMaxCards);
      window.removeEventListener("resize", resiseHandles);
    } else {
      window.removeEventListener("resize", resiseHandles);
    }
  }
  window.addEventListener("resize", resiseHandles);
  const handleMoreClick = () => {
    if(window.innerWidth >= resolutions.laptopL) {
      setMaxCards(maxCards + 4);
      window.removeEventListener("resize", resiseHandles);
    } else if (window.innerWidth <= resolutions.laptopL && window.innerWidth > resolutions.laptop) {
      setMaxCards(maxCards + 3);
      window.removeEventListener("resize", resiseHandles);
    } else if (window.innerWidth <= resolutions.laptop && window.innerWidth > resolutions.tablet) {
      setMaxCards(maxCards + 2);
      window.removeEventListener("resize", resiseHandles);
    } else if (window.innerWidth <= (resolutions.tablet - 1)) {
      setMaxCards(maxCards + 1);
      window.removeEventListener("resize", resiseHandles);
    } else {
      window.removeEventListener("resize", resiseHandles);
    }
  }
  
  useEffect(() => {
    const cardsCount = (pathname === "/movies") ? renderMovie.length : savedMovies.length;
    if(cardsCount <= maxCards) {
      setMoreButtonVisible (true)
    } else {setMoreButtonVisible (false)}
  }, [maxCards, pathname, renderMovie, savedMovies])


  useEffect(() => {
    if(pathname === "/saved-movies") {
      if(savedMovies.length === 0) {
        setEmptyTextVisible (true)

      } else {setEmptyTextVisible (false)}
    } else {
      if(renderMovie.length === 0) {
        setEmptyTextVisible (true)

      } else {setEmptyTextVisible (false)}
    }
    
  }, [savedMovies.length, renderMovie.length, pathname])


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
          {emptyTextVisible ? <p className="movies__empty">{emptyText}</p> : ''}
        <div className="movies__more">
          {!moreButtonVisible ? <button className="movies__more-button" onClick={handleMoreClick}>Ещё</button> : ''}
        </div>
    </section>
  )
}

export default MoviesCardList;