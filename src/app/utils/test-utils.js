import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import boardReducer from "../features/board/boardSlice";
import summaryReducer from "../features/summary/summarySlice";

export function renderWithProviders(
  ui,
  {
    store = configureStore({
      reducer: {
        board: boardReducer,
        summary: summaryReducer,
      },
      preloadedState: {},
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
