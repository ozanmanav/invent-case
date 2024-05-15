import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const baseParams = {
  apikey: API_KEY,
};

const appApi = createApi({
  // Set the baseUrl for every endpoint below
  reducerPath: "appApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getMovies: builder.query<any, { input: string; page: number }>({
      query: (arg: { input: string; page: number }) => ({
        url: "",
        params: {
          ...baseParams,
          s: arg.input,
          page: arg.page,
        },
      }),
    }),
  }),
});

export { appApi };

export const { useLazyGetMoviesQuery } = appApi;
