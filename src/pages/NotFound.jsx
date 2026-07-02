import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        bgcolor: "#F5F7FA",
      }}
    >
      <Typography
        variant="h1"
        fontWeight="bold"
        color="primary"
      >
        404
      </Typography>

      <Typography
        variant="h4"
        fontWeight="bold"
      >
        Page Not Found
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mt: 2 }}
      >
        The page you're looking for doesn't exist.
      </Typography>

      <Button
        sx={{ mt: 4 }}
        variant="contained"
        onClick={() => navigate("/dashboard")}
      >
        Back to Login
      </Button>
    </Box>
  );
};

export default NotFound;