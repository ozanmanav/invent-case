import { Navigate } from "react-router";
import { Movies } from "../pages/Movies";
import { MovieDetail } from "../pages/MovieDetail";

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
