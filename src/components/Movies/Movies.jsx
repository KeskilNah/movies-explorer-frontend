import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Movies.css"
import MoviesCardList from "./MoviesCardList/MoviesCardList"
import SearchForm from "./SearchForm/SearchForm";
import { useState } from "react";
import { useEffect } from "react";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { useLocation } from "react-router-dom";
import shortMoviesHandle from "../../helpres/shortMoviesHandle"
import { useMemo } from "react";
import { ShortDuration } from "../../utils/constants";

function Movies({isLoggedIn}) {

  const [isShortsOn, setIsShortOn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [renderMovie, setRenderMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [savedMovies, setSavedMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const { pathname } = useLocation();
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    mainApi.getMovies()
      .then((savedMoviesData) => {
        
        if(savedMoviesData) {
          setSavedMovies(savedMoviesData.data)
        }
        
      })
      .catch((err) => {
        console.log(err)
      })
  }, [pathname])

  function filterMovies(films) {
    if (isShortsOn) {
      return shortMoviesHandle(films);
    }
    return films.filter((movie) => movie.duration >= ShortDuration);
  }

  useEffect(() => {
    if(pathname === "/movies") {
      setSearchValue (localStorage.getItem("search_film") || "")
    }
  }, [pathname])

  const filteredMovies = useMemo(
    () => filterMovies(movies),
    [isShortsOn, movies]
  );
  const filteredRenderMovies = useMemo(
    () => filterMovies(renderMovie),
    [isShortsOn, renderMovie]
  );
  const filteredSavedMovies = useMemo(
    () => filterMovies(savedMovies),
    [isShortsOn, savedMovies]
  );

  function filterMoviesBySearch(movieList) {
    const films = movieList.filter((movie) => 
      movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMovies(() => {
      localStorage.setItem("foundFilms", JSON.stringify(films));
      return films;
    });
  }

  function onSearchSubmit(evt) {
    evt.preventDefault();
    if (searchValue === "") {
      setInputError("Нужно ввести ключевое слово");
      return;
    }

    (localStorage.setItem("search_film", searchValue));
    setIsLoading(true)
    if (pathname === "/movies") {
      if (!localStorage.getItem("moviesList")) {
        console.log('2')
        moviesApi
          .getMovies()
          .then((moviesList) => {
            localStorage.setItem("moviesList", JSON.stringify(moviesList));
            filterMoviesBySearch(JSON.parse(localStorage.moviesList));
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(setIsLoading(false));
        return;
      }
      setIsLoading(true)
      console.log('3')
      filterMoviesBySearch(
        localStorage.getItem("moviesList")
          ? JSON.parse(localStorage.moviesList)
          : []
      );
      setIsLoading(false)
    } else {
      
      setSavedMovies(
        savedMovies.filter((movie) => movie.nameRU.includes(searchValue))
      );
      setIsLoading(false)
    }
  }

  function addMovie(movie) {
    mainApi
      .addMovie(movie)
      .then((dataMovie) => {
        setSavedMovies([dataMovie.data, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteMovie(movieId) {
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        const newMovies = savedMovies.filter((movie) => movie._id !== movieId);
        setSavedMovies(newMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return(
    <>
    <Header isLoggedIn={isLoggedIn}/>
    <main className="movies">
      <div className="movies__wrapper">
        <SearchForm 
          searchSubmit={onSearchSubmit}
          isShortsOn={isShortsOn}
          setIsShortOn={setIsShortOn}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          inputError={inputError}
          setInputError={setInputError}
          />
        <MoviesCardList
          movies={filteredMovies}
          renderMovie={filteredRenderMovies}
          isLoading={isLoading}
          savedMovies={filteredSavedMovies}
          addMovie={addMovie}
          deleteMovie={deleteMovie}
          setRenderMovie={setRenderMovie}
        />
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Movies;