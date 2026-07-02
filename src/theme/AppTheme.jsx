import { useSelector } from "react-redux";
import {
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import { BrowserRouter } from "react-router-dom";

import { getTheme } from "./theme";

import ErrorBoundary from "../components/common/ErrorBoundary";
import App from "../App";

const AppTheme = () => {
  const mode = useSelector(
    (state) => state.theme.mode
  );

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />

      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppTheme;