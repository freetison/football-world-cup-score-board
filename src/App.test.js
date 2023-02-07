import { cleanup, screen } from "@testing-library/react";
import { renderWithProviders } from "./app/utils/test-utils";
import App from "./App";

describe("<App />", () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  afterEach(cleanup);

  test("it should render Header", () => {
    const header = screen.getByTestId("Header");

    expect(header).toBeInTheDocument();
  });

  test("it should render Scoreboard", () => {
    const scoreboard = screen.getByTestId("Scoreboard");

    expect(scoreboard).toBeInTheDocument();
  });
});
