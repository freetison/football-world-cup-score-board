import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import Game from "./Game";

describe("<Game />", () => {
  test("it should mount", () => {
    renderWithProviders(<Game />);

    const game = screen.getByTestId("Game");

    expect(game).toBeInTheDocument();
  });
});
