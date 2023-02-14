import { ShortDuration } from "../utils/constants";

export default function shortMoviesHandle(movies) {
  return movies.filter((movie) => movie.duration <= ShortDuration)
}