import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const SessionExpired = () => {
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 450,
      }}
    >
      <CardContent sx={{ p: 5 }}>
        <Stack
          spacing={4}
          alignItems="center"
        >
          <AccessTimeFilledIcon
            color="warning"
            sx={{
              fontSize: 80,
            }}
          />

          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Session Expired
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
          >
            Your session has expired. Please login again to continue using the
            Enterprise Governance Platform.
          </Typography>

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => navigate("/login")}
            sx={{
              py: 1.5,
              fontWeight: "bold",
              borderRadius: 2,
            }}
          >
            Go To Login
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SessionExpired;