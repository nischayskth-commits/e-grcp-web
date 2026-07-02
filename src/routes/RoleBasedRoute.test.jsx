import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";

import RoleBasedRoute from "./RoleBasedRoute";

const createStore = (user) =>
  configureStore({
    reducer: {
      auth: () => ({
        user,
      }),
    },
  });

describe("RoleBasedRoute", () => {
  test("redirects to login when user is not available", () => {
    const store = createStore(null);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route element={<RoleBasedRoute />}>
              <Route
                path="/dashboard"
                element={<div>Dashboard</div>}
              />
            </Route>

            <Route
              path="/login"
              element={<div>Login Page</div>}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      getByText("Login Page")
    ).toBeInTheDocument();
  });

  test("allows administrator to access dashboard", () => {
    const store = createStore({
      role: "Administrator",
    });

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route element={<RoleBasedRoute />}>
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

  test("prevents auditor from accessing dashboard", () => {
    const store = createStore({
      role: "Auditor",
    });

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route element={<RoleBasedRoute />}>
              <Route
                path="/dashboard"
                element={<div>Dashboard</div>}
              />
            </Route>

            <Route
              path="/unauthorized"
              element={<div>Unauthorized</div>}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      getByText("Unauthorized")
    ).toBeInTheDocument();
  });

  test("allows auditor to access audit page", () => {
    const store = createStore({
      role: "Auditor",
    });

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/audit"]}>
          <Routes>
            <Route element={<RoleBasedRoute />}>
              <Route
                path="/audit"
                element={<div>Audit Page</div>}
              />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      getByText("Audit Page")
    ).toBeInTheDocument();
  });

  test("allows administrator to access notifications", () => {
    const store = createStore({
      role: "Administrator",
    });

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/notifications"]}>
          <Routes>
            <Route element={<RoleBasedRoute />}>
              <Route
                path="/notifications"
                element={<div>Notifications</div>}
              />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      getByText("Notifications")
    ).toBeInTheDocument();
  });

  test("allows routes that do not require permissions", () => {
    const store = createStore({
      role: "Administrator",
    });

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/random-page"]}>
          <Routes>
            <Route element={<RoleBasedRoute />}>
              <Route
                path="/random-page"
                element={<div>Random Page</div>}
              />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      getByText("Random Page")
    ).toBeInTheDocument();
  });
});