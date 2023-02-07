import { createSlice } from "@reduxjs/toolkit";
import games from "./gamesList";

const initialStateBoard = games.map((g) => ({
  ...g,
  score: { time: 0, home: 0, away: 0 },
}));

const boardSlice = createSlice({
  name: "board",
  initialState: initialStateBoard,
});

export default boardSlice.reducer;
