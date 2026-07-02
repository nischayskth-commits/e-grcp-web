import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader", () => {
  test("renders loader component", () => {
    render(<Loader />);

    expect(
      screen.getByRole("progressbar")
    ).toBeInTheDocument();
  });

  test("renders only one progress indicator", () => {
    render(<Loader />);

    expect(
      screen.getAllByRole("progressbar")
    ).toHaveLength(1);
  });
});