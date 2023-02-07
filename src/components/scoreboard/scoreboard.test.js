import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import Scoreboard from "./Scoreboard";

describe("<Scoreboard />", () => {
  test("it should mount", () => {
    renderWithProviders(<Scoreboard />);

    const scoreboard = screen.getByTestId("Scoreboard");

    expect(scoreboard).toBeInTheDocument();
  });

  test("it should have get data from store", () => {
    renderWithProviders(<Scoreboard />);

    const scoreboard = screen.getByTestId("Scoreboard");

    expect(scoreboard).toBeInTheDocument();
  });
});
