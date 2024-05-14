import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
  searchInput: string;
  list: any[];
};

const initialState: AppState = {
  searchInput: "Pokemon",
  list: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    setList(state, action: PayloadAction<any[]>) {
      state.list = action.payload;
    },
  },
});

export const { setSearchInput, setList } = movieSlice.actions;
