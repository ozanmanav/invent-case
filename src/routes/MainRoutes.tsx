import { Navigate } from "react-router";
import { Movies } from "../pages/movies/Movies";
import { MovieDetail } from "../pages/movie-detail/MovieDetail";

export const MainRoutes = {
  path: "/",
  children: [
    {
      index: true,
      element: <Navigate to="/movies" replace />,
    },
    {
      path: "movies",
      element: <Movies />,
    },
    {
      path: "movies/:movieId",
      element: <MovieDetail />,
    },
    { path: "*", element: <p>There is no page</p> },
  ],
};
