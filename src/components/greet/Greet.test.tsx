import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("render greet", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("test with a name", () => {
      render(<Greet name="Yamachoki" />);
      const textElement = screen.getByText(/hello Yamachoki/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});
