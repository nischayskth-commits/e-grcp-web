import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";

import PublicRoute from "./PublicRoute";

const createStore = (isAuthenticated) =>
  configureStore({
    reducer: {
      auth: () => ({
        isAuthenticated,
      }),
    },
  });

describe("PublicRoute", () => {
  test("shows login page when user is not authenticated", () => {
    const store = createStore(false);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route
                path="/login"
                element={<div>Login Page</div>}
              />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      getByText("Login Page")
    ).toBeInTheDocument();
  });

  test("redirects authenticated user to dashboard", () => {
    const store = createStore(true);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route
                path="/login"
                element={<div>Login Page</div>}
              />
            </Route>

            <Route
              path="/dashboard"
              element={<div>Dashboard</div>}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      getByText("Dashboard")
    ).toBeInTheDocument();
  });
});