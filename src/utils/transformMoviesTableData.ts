import { Movie } from "../types/types";

export const transformMoviesTableData = (movies: Movie[]): any[] => {
  return movies.map((movie) => ({
    ...movie,
    id: movie.imdbID,
  }));
};
