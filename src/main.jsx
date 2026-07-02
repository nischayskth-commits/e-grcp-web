import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {
  store,
  persistor,
} from "./app/store";

import AppTheme from "./theme/AppTheme";
import ErrorBoundary from "./components/common/ErrorBoundary";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <AppTheme />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);