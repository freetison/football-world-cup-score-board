import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import Team from "./Team";

describe("<Team />", () => {
  test("it should mount", () => {
    renderWithProviders(<Team />);

    const team = screen.getByTestId("Team");

    expect(team).toBeInTheDocument();
  });
});
