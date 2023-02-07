import { screen } from "@testing-library/react";
import { renderWithProviders } from "./app/utils/test-utils";
import App from "./App";

describe("<App />", () => {
  test("it should render Header", () => {
    renderWithProviders(<App />);

    const header = screen.getByTestId("Header");

    expect(header).toBeInTheDocument();
  });

  test("it should render Scoreboard", () => {
    renderWithProviders(<App />);

    const scoreboard = screen.getByTestId("Scoreboard");

    expect(scoreboard).toBeInTheDocument();
  });
});
