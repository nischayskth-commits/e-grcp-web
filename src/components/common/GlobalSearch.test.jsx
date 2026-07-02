import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GlobalSearch from "./GlobalSearch";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("GlobalSearch", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("renders search input", () => {
    render(
      <MemoryRouter>
        <GlobalSearch />
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText("Search modules...")
    ).toBeInTheDocument();
  });

  test("shows matching result", () => {
    render(
      <MemoryRouter>
        <GlobalSearch />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText("Search modules..."),
      {
        target: {
          value: "Da",
        },
      }
    );

    expect(
      screen.getByText("Dashboard")
    ).toBeInTheDocument();
  });

  test("shows no results message", () => {
    render(
      <MemoryRouter>
        <GlobalSearch />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText("Search modules..."),
      {
        target: {
          value: "xyz",
        },
      }
    );

    expect(
      screen.getByText("No matching module found")
    ).toBeInTheDocument();
  });

  test("navigates when clicking a result", () => {
    render(
      <MemoryRouter>
        <GlobalSearch />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText("Search modules..."),
      {
        target: {
          value: "Rep",
        },
      }
    );

    fireEvent.click(
      screen.getByText("Reports")
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      "/reports"
    );
  });

  test("search is case insensitive", () => {
    render(
      <MemoryRouter>
        <GlobalSearch />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText("Search modules..."),
      {
        target: {
          value: "audit",
        },
      }
    );

    expect(
      screen.getByText("Audit")
    ).toBeInTheDocument();
  });

  test("typing displays entered search text", () => {
    render(
      <MemoryRouter>
        <GlobalSearch />
      </MemoryRouter>
    );

    const input =
      screen.getByPlaceholderText(
        "Search modules..."
      );

    fireEvent.change(input, {
      target: {
        value: "Risk",
      },
    });

    expect(input.value).toBe("Risk");
  });
});