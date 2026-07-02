import React from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application Error:", error);
    console.error(errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#F4F6F8",
          }}
        >
          <Paper
            sx={{
              p: 5,
              textAlign: "center",
              width: 500,
            }}
          >
            <Typography
              variant="h3"
              color="error"
              fontWeight="bold"
            >
              Oops!
            </Typography>

            <Typography
              mt={2}
              variant="h5"
            >
              Something went wrong.
            </Typography>

            <Typography
              mt={2}
              color="text.secondary"
            >
              An unexpected application error occurred.
            </Typography>

            <Button
              sx={{ mt: 4 }}
              variant="contained"
              onClick={this.handleReload}
            >
              Reload Application
            </Button>
          </Paper>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;