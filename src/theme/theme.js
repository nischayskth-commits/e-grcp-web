import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#1976d2",
      },

      secondary: {
        main: "#2e7d32",
      },

      background: {
        default: mode === "light" ? "#F4F6F8" : "#0D1117",
        paper: mode === "light" ? "#FFFFFF" : "#161B22",
      },

      text: {
        primary: mode === "light" ? "#111827" : "#F8FAFC",
        secondary: mode === "light" ? "#6B7280" : "#9CA3AF",
      },

      divider: mode === "light" ? "#E5E7EB" : "#30363D",
    },

    shape: {
      borderRadius: 12,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          html: {
            height: "100%",
          },

          body: {
            margin: 0,
            height: "100%",
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            transition: "background-color .3s ease, color .3s ease",
          },

          "#root": {
            minHeight: "100%",
            backgroundColor: theme.palette.background.default,
          },
        }),
      },
    },
  });