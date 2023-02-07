import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header title="Scoreboard" style={{}}></Header>);
  });

  afterEach(cleanup);

  test("it should mount", () => {
    const header = screen.getByText("Scoreboard");
    expect(header).toBeInTheDocument();
  });

  test("it should display a title", () => {
    const headerText = screen.queryByText(/Scoreboard/i);
    expect(headerText).toBeInTheDocument();
  });

  test("it should have style applied", () => {
    const header = screen.getByTestId("Header");
    const styles = getComputedStyle(header);
    expect(styles.display).toBe("flex");
  });
});
