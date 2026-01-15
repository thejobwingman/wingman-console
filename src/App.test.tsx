import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders dashboard layout", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    // App shell
    expect(screen.getByText("Job Wingman Console")).toBeInTheDocument();
    // Dashboard page
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
