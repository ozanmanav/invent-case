export type GetMoviesQueryInput = {
  input: string;
  page: number;
  year: string;
  type: string;
};

export type GetMoviesQueryResponse = {
  Search: MovieDetails[];
  totalResults: string;
  Response: string;
};

export type GetMovieDetailByIdQueryInput = {
  id: string;
};

export type GetMovieDetailByIdQueryResponse = MovieDetails;

type Rating = {
  Source: string;
  Value: string;
};

export type MovieDetails = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};
