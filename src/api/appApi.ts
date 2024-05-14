import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./baseQuery";

const appApi = createApi({
  // Set the baseUrl for every endpoint below
  reducerPath: "appApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (arg: { input: string }) => ({
        url: `${encodeURIComponent("&s=" + arg.input)}`,
      }),
    }),
  }),
});

export { appApi };

export const { useGetMoviesQuery } = appApi;
