import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import Summary from "./Summary";

describe("<Summary />", () => {
  test("it should mount", () => {
    renderWithProviders(<Summary />);

    const summary = screen.getByTestId("Summary");

    expect(summary).toBeInTheDocument();
  });
});
