import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./features/board/boardSlice";
import summaryReducer from "./features/summary/summarySlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    summary: summaryReducer,
  },
});
