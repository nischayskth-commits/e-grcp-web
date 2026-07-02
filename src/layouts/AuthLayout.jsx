import { Outlet } from "react-router-dom";

import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ShieldIcon from "@mui/icons-material/Shield";
import SecurityIcon from "@mui/icons-material/Security";
import GavelIcon from "@mui/icons-material/Gavel";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0F172A,#1E3A8A,#2563EB)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Paper
          elevation={10}
          sx={{
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              minHeight: "750px",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            {/* Left */}

            <Box
              sx={{
                flex: 1,
                bgcolor: "#0F172A",
                color: "#fff",
                display: {
                  xs: "none",
                  md: "flex",
                },
                flexDirection: "column",
                justifyContent: "center",
                p: 7,
              }}
            >
              <Typography variant="h3" fontWeight="bold">
                e-GRCP
              </Typography>

              <Typography
                variant="h6"
                mt={2}
                color="#CBD5E1"
              >
                Enterprise Governance
                <br />
                Risk
                <br />
                Compliance
                <br />
                Procurement Platform
              </Typography>

              <Stack spacing={3} mt={8}>
                <Stack direction="row" spacing={2}>
                  <ShieldIcon color="primary" />
                  <Typography>
                    Governance Management
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <SecurityIcon color="primary" />
                  <Typography>
                    Enterprise Risk Monitoring
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <GavelIcon color="primary" />
                  <Typography>
                    Compliance Tracking
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <ShoppingCartCheckoutIcon color="primary" />
                  <Typography>
                    Procurement Automation
                  </Typography>
                </Stack>
              </Stack>

              <Typography mt={8} color="#94A3B8">
                Version 1.0.0
              </Typography>

              <Typography color="#94A3B8">
                © 2026 e-GRCP Enterprise Platform
              </Typography>
            </Box>

            {/* Right */}

            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#fff",
                p: 5,
              }}
            >
              <Outlet />
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AuthLayout;