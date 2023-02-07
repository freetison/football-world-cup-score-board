import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("it should render header", () => {
    render(<App />);

    const header = screen.getByTestId("Header");

    expect(header).toBeInTheDocument();
  });
});
