import { combineReducers, configureStore } from "@reduxjs/toolkit";
import boardReducer from "./features/board/boardSlice";
import summaryReducer from "./features/summary/summarySlice";

const rootReducer = combineReducers({
  board: boardReducer,
  summary: summaryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default rootReducer;
