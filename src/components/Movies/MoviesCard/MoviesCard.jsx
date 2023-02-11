import React from "react";
import "./MoviesCard.css"
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useState } from "react";
import { useContext } from "react";

function MoviesCard({
  item,
  name,
  duration,
  trailerLink,
  maxCards,
  addMovie,
  savedMovies,
  deleteMovie,
}) {

  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (savedMovies.length > 0) {
      if (!isSavedMovie) {
        setIsSavedMovie(
          savedMovies.some(
            (savedMovie) =>
              savedMovie.movieId === item.id 
          )
        );
      }
    } else {
      setIsSavedMovie(false);
    }
  }, [currentUser._id, isSavedMovie, item.id, savedMovies, item]);

  function handleAddClick(evt) {
    if (!isSavedMovie) {
      addMovie(item);
      setIsSavedMovie(true);
    } else {
      const movieItem = savedMovies.filter(
        (savedMovie) => savedMovie.movieId === item.id
      );
      deleteMovie(movieItem[0]._id);
      evt.target.classList.remove('card__save-button_active')
      // setIsSavedMovie(false);
    }
  }

  function handleDeleteClick() {
    deleteMovie(item._id);
  }

  const durationHandle = () => {
    let hours = ~~(duration / 60);
    let min = duration % 60;
    return hours > 0 ? `${hours}ч${min}` : `${min}м`;
  };
  const location = useLocation();
  const card = document.querySelectorAll(".card")
  card.forEach((item, index) => {
    item.classList.add('hidden')
    if (index <= (maxCards - 1)) {
      item.classList.remove('hidden')
    } 
  })

  return(
    <li className="card">
      <a href={trailerLink} target="_blank" rel="noreferrer"><img src={(location.pathname === "/saved-movies") ? item.image : `https://api.nomoreparties.co${item.image.url}`} alt="card" className="card__image"/></a>
      <div className="card__description">
        <p className="card__title">{name}</p>
        {
        (location.pathname === "/saved-movies")
        ?
        <button className={!isSavedMovie ? "card__delete-button" : "card__delete-button"} onClick={handleDeleteClick}></button>
        :
        <button className={!isSavedMovie ? "card__save-button" : "card__save-button card__save-button_active"} onClick={handleAddClick}></button>
        }
        <p className="card__duration">{durationHandle()}</p>
      </div>
    </li>  
)
}

export default MoviesCard;