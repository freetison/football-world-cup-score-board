import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

const setup = () => render(<Header />);

describe("<Header />", () => {
  test("it should mount", () => {
    setup();
    const header = screen.getByTestId("Header");
    expect(header).toBeInTheDocument();
  });

  test("it should display a title", () => {
    setup();
    const header = screen.getByText(/Scoreboard/i);
    expect(header).toBeInTheDocument();
  });
});
