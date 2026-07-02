import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h1"
        color="error"
        fontWeight="bold"
      >
        403
      </Typography>

      <Typography
        variant="h4"
        fontWeight="bold"
      >
        Access Denied
      </Typography>

      <Typography
        color="text.secondary"
        mt={2}
      >
        You don't have permission to access this page.
      </Typography>

      <Button
        sx={{ mt: 4 }}
        variant="contained"
        onClick={() => navigate("/dashboard")}
      >
        Back to Dashboard
      </Button>
    </Box>
  );
};

export default Unauthorized;