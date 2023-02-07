import React from "react";
import { screen, cleanup } from "@testing-library/react";
import { renderWithProviders } from "../../app/utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import Summary from "./Summary";

describe("<Summary />", () => {
  beforeEach(() => {
    renderWithProviders(<Summary />);
  });

  afterEach(cleanup);

  test("it should mount", () => {
    const summary = screen.getByTestId("Summary");
    expect(summary).toBeInTheDocument();
  });
});
