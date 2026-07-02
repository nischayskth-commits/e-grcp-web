import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

const createStore = (isAuthenticated) =>
  configureStore({
    reducer: {
      auth: () => ({
        isAuthenticated,
      }),
    },
  });

describe("ProtectedRoute", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("renders protected content when authenticated", () => {
    const store = createStore(true);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route
                path="/dashboard"
                element={<div>Dashboard</div>}
              />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      getByText("Dashboard")
    ).toBeInTheDocument();
  });

  test("renders protected content when user exists in localStorage", () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: "admin@test.com",
      })
    );

    const store = createStore(false);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route
                path="/dashboard"
                element={<div>Dashboard</div>}
              />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      getByText("Dashboard")
    ).toBeInTheDocument();
  });

  test("redirects unauthenticated user to login", () => {
    const store = createStore(false);

    const { queryByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route
                path="/dashboard"
                element={<div>Dashboard</div>}
              />
            </Route>

            <Route
              path="/login"
              element={<div>Login</div>}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      queryByText("Dashboard")
    ).not.toBeInTheDocument();
  });
});