import React from "react";
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"
import { initialCards } from "../../../utils/constants";
import Preloader from "../Preloader/Preloader";



function MoviesCardList() {
  return(
    <section className="movies__card-list">
          <ul className="movies__cards">
            {initialCards.map((data) => (
              <MoviesCard 
              key={data._id}
              name={data.name}
              image={data.image}
              />
            ))}
          </ul>
          <Preloader />
        <div className="movies__more">
          <button className="movies__more-button">Ещё</button>
        </div>
    </section>
  )
}

export default MoviesCardList;