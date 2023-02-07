import React from "react";
import { screen, cleanup } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import * as reactRedux from "react-redux";
import Scoreboard from "./Scoreboard";

describe("<Scoreboard />", () => {
  const mockStore = configureStore();
  const mockGames = {
    games: [
      {
        id: 1,
        stadium: "Estadio Azteca",
        home: "Mexico",
        away: "Canada",
      },
      {
        id: 2,
        stadium: "Bernabéu",
        home: "Spain",
        away: "Brazil",
      },
    ],
  };
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useSelectorMock.mockClear();
    renderWithProviders(<Scoreboard />);
  });

  afterEach(cleanup);

  test("it should mount", () => {
    const scoreboard = screen.getByTestId("Scoreboard");
    expect(scoreboard).toBeInTheDocument();
  });

  test("it should have get data from store", () => {
    useSelectorMock.mockReturnValue(mockGames);
    const scoreboard = screen.getByTestId("Scoreboard");
    expect(scoreboard).toBeInTheDocument();
  });
});
