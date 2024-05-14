import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const API_URL = import.meta.env.VITE_APP_BACKEND_API_URL;
console.log(API_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

export { baseQuery };
