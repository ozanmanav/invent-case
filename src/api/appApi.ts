import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import {
  GetMoviesQueryInput,
  GetMoviesQueryResponse,
  GetMovieDetailByIdQueryInput,
  GetMovieDetailByIdQueryResponse,
} from "../types/types";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const baseParams = {
  apikey: API_KEY,
};

const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getMovies: builder.query<GetMoviesQueryResponse, GetMoviesQueryInput>({
      query: (arg) => ({
        url: "",
        params: {
          ...baseParams,
          s: arg.input,
          page: arg.page,
          ...(arg.year !== "" && { y: arg.year }),
          ...(arg.type !== "" && { type: arg.type }),
        },
      }),
    }),
    getMovieDetailById: builder.query<
      GetMovieDetailByIdQueryResponse,
      GetMovieDetailByIdQueryInput
    >({
      query: (arg) => ({
        url: "",
        params: {
          ...baseParams,
          i: arg.id,
        },
      }),
    }),
  }),
});

export { appApi };

export const { useLazyGetMoviesQuery, useLazyGetMovieDetailByIdQuery } = appApi;
