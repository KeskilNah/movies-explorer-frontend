import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NoPage from '../NoPage/NoPage';

function App() {
  return (
    <div className="App">
      <div className="page__wrapper">
        <Routes>
        
          <Route exact path="/" element={<Main />}/>
          <Route path="movies" element={<Movies />}/>
          <Route path="saved-movies" element={<Movies />}/> {/*далее будет изменено в зависимости от сохранённых фильмов*/}
          <Route path="profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
