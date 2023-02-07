import { combineReducers, configureStore } from "@reduxjs/toolkit";
import boardReducer from "./features/board/boardSlice";

export const rootReducer = combineReducers({
  board: boardReducer,
});

export const store = configureStore({
  reducer: {
    board: rootReducer,
  },
});
