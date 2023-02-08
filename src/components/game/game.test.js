import React from "react";
import { screen, cleanup } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Game from "./Game";

describe("<Game />", () => {
  const game = {
    id: 1,
    stadium: "Estadio Azteca",
    home: "Mexico",
    away: "Canada",
  };

  beforeEach(() => {
    renderWithProviders(<Game data={game} />);
  });

  afterEach(cleanup);

  test("it should mount", () => {
    const game = screen.getByTestId("Game");
    expect(game).toBeInTheDocument();
  });

  test("it should have render a game location", () => {
    const stadium = screen.getByText("Estadio Azteca");
    expect(stadium).toBeInTheDocument();
  });

  test("it should have render a button", () => {
    const button = screen.getByRole("button", { name: "Start" });
    expect(button).toBeInTheDocument();
  });

  test("should be hide button after click on it", () => {
    const button = screen.getByRole("button", { name: "Start" });

    userEvent.click(button);
    expect(button).not.toBeInTheDocument();
  });
});
