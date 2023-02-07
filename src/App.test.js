import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("it should render Header", () => {
    render(<App />);

    const header = screen.getByTestId("Header");

    expect(header).toBeInTheDocument();
  });

  test("it should render Scoreboard", () => {
    render(<App />);

    const scoreboard = screen.getByTestId("Scoreboard");

    expect(scoreboard).toBeInTheDocument();
  });
});
