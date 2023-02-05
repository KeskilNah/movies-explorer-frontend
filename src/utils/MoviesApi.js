import { MoviesOptions } from "./constants";

class MoviesApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }


  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkError);
  }

  

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`ОШИБКА: ${res.message}`);
  }
}

const moviesApi = new MoviesApi({
  url: MoviesOptions.url,
  headers:MoviesOptions.headers,
});

export default moviesApi