import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import MainApi from '../../utils/MainApi'
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../../utils/ProtectedRoute';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NoPage from '../NoPage/NoPage';

function App() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    let jwt = localStorage.getItem("jwt");
    if(jwt) {
      mainApi.checkToken(jwt)
      .then((res) => {
        if (res) {
          setCurrentUser({
            id: res._id,
            name: res.name,
            email: res.email,
          });
          setLoggedIn(true);
        }
      })
      .catch((e) => {
        console.log(`error${e}`)
        navigate("/signin");
      });
    }
  }, [isLoggedIn, currentUser.name, currentUser.email, navigate])

  const handleUpdateUser = (data) => {
    MainApi.editProfile(data)
      .then((res) => {
        setCurrentUser({
          id: res._id,
          name: res.name,
          email: res.email,
        });
      })
      .catch((err) => {
        console.log(err)
      }
      )
  }

  const handleLoginSubmit = (data) => {
    setIsLoading(true)
    mainApi.login(data)
    .then((res) => {
      if(res) {
        localStorage.setItem("jwt", res.token);
        mainApi.checkToken(res).then((response) => {
          setCurrentUser({
            id: response._id,
            name: response.name,
            email: response.email,
          })
          navigate("/movies");
          setIsError(false)
          setErrorMessage("")
        })
      }
      setIsLoading(false)
    })
  .catch((err) => {
      console.log(err);
      setIsLoading(false)
      setIsError(true)
    });
  }

  const handleRegistrationSubmit = (data) => {
    mainApi.register(data)
      .then((res) => {
        if(res) {
          handleLoginSubmit(data)
          setIsError(false)
          setErrorMessage("")
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true)
        setErrorMessage(err.message)
      })
  }

  const handleLogoutSubmit = () => {
    localStorage.setItem("jwt", "");
    localStorage.setItem("foundFilms", "")
    localStorage.setItem("search_film", "")
    localStorage.setItem("moviesList", "")
    setLoggedIn(false);
    navigate("/signin")
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <div className="page__wrapper">
        <Routes>
          <Route 
            exact path="/" 
            element={<Main isLoggedIn={isLoggedIn}/>}
          />
          <Route
            path="movies"
            element={(
              <ProtectedRoute>
                <Movies
                  isLoggedIn={isLoggedIn}
                  currentUser={currentUser}
                />
              </ProtectedRoute>
            )}
          />
          <Route
            path="saved-movies"
            element={(
              <ProtectedRoute>
              <Movies
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
              />
            </ProtectedRoute>
            )}
          /> {/*?????????? ?????????? ???????????????? ?? ?????????????????????? ???? ?????????????????????? ??????????????*/}
          <Route
            path="profile"
            element={(
              <ProtectedRoute>
                <Profile
                  isLoggedIn={isLoggedIn}
                  onLogout={handleLogoutSubmit}
                  onProfileEdit={handleUpdateUser}
                  isLoading={isLoading}
                  isError={isError}
                  errorMessage={errorMessage}
                />
              </ProtectedRoute>
            )}
          />
          <Route
            path="signin"
            element={<Login
              onLoginSubmit={handleLoginSubmit}
              isLoading={isLoading}
              isLoggedIn={isLoggedIn}
              isError={isError}
              errorMessage={errorMessage}
              />}
          />
          <Route
            path="signup"
            element={<Register
              onRegisterSubmit={handleRegistrationSubmit}
              isLoading={isLoading}
              isLoggedIn={isLoggedIn}
              isError={isError}
              errorMessage={errorMessage}
              />}
          />
          <Route
            path="*"
            element={<NoPage />}
          />
        </Routes>
      </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
