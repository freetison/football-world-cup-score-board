import React from "react";
import { useSelector } from "react-redux";
import { screen, cleanup } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import * as reactRedux from "react-redux";
import Scoreboard from "./Scoreboard";

describe("<Scoreboard />", () => {
  const mockStore = {
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

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  // jest.mock("react-router");
  // const useSelectorMock = useSelector;

  jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
  }));

  beforeEach(() => {
    renderWithProviders(<Scoreboard />);
  });

  afterEach(() => {
    cleanup;
  });

  test("it should mount", () => {
    const scoreboard = screen.getByTestId("Scoreboard");
    expect(scoreboard).toBeInTheDocument();
  });

  test("it should have get data from store", () => {
    const stadium = screen.getByText("Estadio Azteca");
    expect(stadium).toBeInTheDocument();
  });
});
