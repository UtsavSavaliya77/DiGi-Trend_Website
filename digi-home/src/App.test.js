import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Know More CTA", () => {
  render(<App />);
  expect(
    screen.getByRole("link", { name: /know more/i })
  ).toBeInTheDocument();
});
