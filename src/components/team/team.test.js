import React from "react";
import { screen, cleanup } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import Team from "./Team";

describe("<Team />", () => {
  const game = {
    id: 1,
    stadium: "Estadio Azteca",
    home: "Mexico",
    away: "Canada",
  };

  beforeEach(() => {
    renderWithProviders(<Team />);
  });

  afterEach(cleanup);

  test("it should mount", () => {
    const team = screen.getByTestId("Team");
    expect(team).toBeInTheDocument();
  });

  test("should not show the Goal button on mount", () => {
    const goalButton = screen.queryByText("make a goal");
    expect(goalButton).toBeNull();
  });
});
