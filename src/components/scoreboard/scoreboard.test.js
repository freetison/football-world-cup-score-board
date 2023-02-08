import React from "react";
import { screen, cleanup } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import Scoreboard from "./Scoreboard";

describe("<Scoreboard />", () => {
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
