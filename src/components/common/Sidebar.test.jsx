import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import Sidebar from "./Sidebar";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useLocation: () => ({
    pathname: "/dashboard",
  }),
}));

const createStore = (role) =>
  configureStore({
    reducer: {
      auth: () => ({
        user: {
          role,
        },
      }),
    },
  });

describe("Sidebar", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("renders application title", () => {
    const store = createStore("Administrator");

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText("e-GRCP")
    ).toBeInTheDocument();
  });

  test("administrator can see dashboard", () => {
    const store = createStore("Administrator");

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText("Dashboard")
    ).toBeInTheDocument();
  });

  test("auditor cannot see dashboard", () => {
    const store = createStore("Auditor");

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.queryByText("Dashboard")
    ).not.toBeInTheDocument();

    expect(
      screen.getByText("Audit")
    ).toBeInTheDocument();
  });

  test("clicking reports navigates correctly", () => {
    const store = createStore("Administrator");

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(
      screen.getByText("Reports")
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      "/reports"
    );
  });

  test("settings is visible", () => {
    const store = createStore("Administrator");

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText("Settings")
    ).toBeInTheDocument();
  });

  test("notifications are not shown in sidebar", () => {
    const store = createStore("Administrator");

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.queryByText("Notifications")
    ).not.toBeInTheDocument();
  });
});