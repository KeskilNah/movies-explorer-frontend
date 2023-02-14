import { MainOptions } from "./constants";

class MainApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }


  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkError);
  }

  editProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._checkError);
  }

  register({ name, email, password, }) {
    return fetch (`${this._url}/signup` , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkError);
  }

  login({ password, email }) {
    return fetch (`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._checkError);
  }

  checkToken() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this._checkError);
  };

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this._checkError);
  }

  addMovie(item) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        country: item.country,
        director: item.director,
        duration: item.duration,
        year: item.year,
        description: item.description,
        image: `https://api.nomoreparties.co${item.image.url}`,
        trailerLink: item.trailerLink,
        nameRU: item.nameRU,
        nameEN: item.nameEN,
        thumbnail: `https://api.nomoreparties.co${item.image.url}`,
        movieId: item.id,
      }),
    }).then(this._checkError);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this._checkError);
  }
  
  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`ОШИБКА: ${res.message}`);
  }
}

const mainApi = new MainApi({
  url: MainOptions.url,
  headers:MainOptions.headers,
});

export default mainApi