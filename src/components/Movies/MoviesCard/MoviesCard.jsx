import React from "react";
import "./MoviesCard.css"
import { useLocation } from 'react-router-dom';



function handleAddClick(evt) {
  evt.target.classList.toggle('card__save-button_active')
}

function MoviesCard(props) {
  const location = useLocation();

  return(
    <li className="card">
      <img src={props.image} alt="card" className="card__image"/>
      <div className="card__description">
        <p className="card__title">{props.name}</p>
        {
        (location.pathname === "/saved-movies")
        ?
        <button className="card__delete-button" onClick={handleAddClick}></button>
        :
        <button className="card__save-button" onClick={handleAddClick}></button>
        }
        <p className="card__duration">1ч42мин</p>
      </div>
    </li>  
)
}

export default MoviesCard;