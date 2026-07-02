import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import Login from "./Login";

const createStore = ({
  loading = false,
  error = null,
  isAuthenticated = false,
  user = null,
} = {}) =>
  configureStore({
    reducer: {
      auth: () => ({
        loading,
        error,
        isAuthenticated,
        user,
      }),
    },
  });

describe("Login Page", () => {
  test("renders login page", () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByRole("heading", {
        name: /sign in/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /sign in/i,
      })
    ).toBeInTheDocument();
  });

  test("renders email input", () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByLabelText(/email address/i)
    ).toBeInTheDocument();
  });

  test("renders password input", () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByLabelText(/password/i)
    ).toBeInTheDocument();
  });

  test("renders remember me checkbox", () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByRole("checkbox")
    ).toBeInTheDocument();
  });

  test("renders forgot password link", () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(/forgot password/i)
    ).toBeInTheDocument();
  });

  test("shows error message", () => {
    const store = createStore({
      error: "Invalid email or password",
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(
        /invalid email or password/i
      )
    ).toBeInTheDocument();
  });

  test("shows loader while loading", () => {
    const store = createStore({
      loading: true,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByRole("progressbar")
    ).toBeInTheDocument();
  });

  test("shows application description", () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(
        /enterprise governance/i
      )
    ).toBeInTheDocument();
  });

  test("shows application version", () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(/version 1.0.0/i)
    ).toBeInTheDocument();
  });
});