import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router";
import { Movies } from "../pages/movies";
import { MovieDetail } from "../pages/movie-detail/movie-detail";

export const router = createBrowserRouter(
  [
    {
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
    },
  ],
  {
    basename: import.meta.env.VITE_APP_BASE_NAME,
  }
);
