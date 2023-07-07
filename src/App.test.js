import { render, screen } from "@testing-library/react";

describe("BrowserRouter", () => {
  it("renders the home page by default", () => {
    render(<div>App</div>);
    expect(screen.getByText("App")).toBeInTheDocument();
  });
});
