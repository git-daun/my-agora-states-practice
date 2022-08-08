//import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("내가만드는테스트다", () => {
  render(<App />);
  const btn = screen.getByText(/My Agora States/i);
  expect(btn).toBeInTheDocument();
});
