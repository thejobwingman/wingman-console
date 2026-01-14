import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the Console heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /console/i, level: 1 })
    ).toBeInTheDocument();
  });
});
