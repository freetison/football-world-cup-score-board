import React from "react";
import { screen, cleanup } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import Team from "./Team";

describe("<Team />", () => {
  beforeEach(() => {
    renderWithProviders(<Team />);
  });

  afterEach(cleanup);

  test("it should mount", () => {
    const team = screen.getByTestId("Team");
    expect(team).toBeInTheDocument();
  });
});
